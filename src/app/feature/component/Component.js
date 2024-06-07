import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import FieldComponent from "@/app/feature/fieldComponents/fieldComponent";
import { productService } from "@/app/services/productService/productService";
import { productPageService } from "@/app/services/productPageService";

function getAge(dateOfBirth) {
    // Create a Date object from the provided DOB
    const dob = new Date(dateOfBirth);

    // Get today's date
    const today = new Date();

    // Calculate the difference in milliseconds between today and DOB
    const ageDiffInMs = today.getTime() - dob.getTime();

    // Convert milliseconds to years (rounded down to whole years)
    const ageInYears = Math.floor(ageDiffInMs / (1000 * 60 * 60 * 24 * 365));

    // Return the calculated age
    return ageInYears;
}

const Component = ({
    themeConfig,
    utmConfig,
    form = {},
    formName,
    pageRoute

}) => {
    const { form: { components } = {} } = form;
    // const formData = useSelector()

    const myFunction = async () => {
        const rulesData = await productPageService.productFormRules(form.rules);
        console.log(rulesData, form?.name, "::rulesData");
    };
    useEffect(() => {
        myFunction();
    });
    // const formData = {
    //       InsurerAge: 30,
    //       premiumType: 'Limited Pay',
    //       isPosSeller: 'Yes',
    //       premiumPaymentTerm: '13',
    //     }

    if (form?.name === "productDetails") {
        const formData = useSelector((state) => state.forms.personalDetails);
        const insurerAge = getAge(formData?.dateOfBirth);
        const _formData = { ...formData, insurerAge, isPosSeller: 'Yes' }

        const productComponent = productService.getProductComponent('SSP', _formData)
        components?.forEach(field => {
            if (productComponent[field?.name]) {
                field.data = [];
                field.data = productComponent[field?.name]?.values;
            }
        });

    }
    // console.log('productComponent', productComponent)

    // console.log("form================>", form);
    return (
        <div className="grid grid-cols-2 gap-10">
            {
                components.length > 0 &&
                components.map((component) => {
                    return <FieldComponent
                        key={component?.name}
                        component={component}
                        formName={formName}
                        pageRoute={pageRoute}
                    />
                })
            }
        </div>
    )
}

export default Component;
