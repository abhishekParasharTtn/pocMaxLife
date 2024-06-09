import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import FieldComponent from "@/app/feature/fieldComponents/fieldComponent";
import { productService } from "@/app/services/productService/productService";

const Component = ({
    themeConfig,
    utmConfig,
    form = {},
    formName,
    pageRoute

}) => {
    const { form: { components } = {} } = form;
    // const formData = useSelector()


    // const formData = {
    //       InsurerAge: 30,
    //       premiumType: 'Limited Pay',
    //       isPosSeller: 'Yes',
    //       premiumPaymentTerm: '13',
    //     }

    if (form?.name === "productDetails") {
        const formData = useSelector((state) => state.forms.personalDetails);
        const productComponent = productService.getProductComponent('SSP', formData)
        components?.forEach(field => {
            if (productComponent[field?.name]) {
                field.data = [];
                field.data = productComponent[field?.name]?.values;
            }
        });

    }

    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
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