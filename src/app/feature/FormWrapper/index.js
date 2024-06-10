import Section from "@/app/feature/Section/Section";
import React, { useEffect, useState } from "react";
import Component from "@/app/feature/component/Component";
import { useSelector } from "react-redux";
import { productPageService } from "@/app/services/productPageService";
const FORM_NAMES = {
    PRODUCT_FORM: "productDetails"
}

const FormWrapper = ({
    // themeConfig, utmConfig, section, pages,formName,pageRoute 
    themeConfig,
    utmConfig,
    form,
    formName,
    pageRoute
}) => {

    const formData = useSelector((state) => state.forms.personalDetails) || {};
    const [showProductDetail, setShowProductDetail] = useState(false)

    const myFunction = async () => {
        try {
            const _facts = {
                firstName: false,
                lastName: false,
                dob: false,
                gender: false
            }
            Object.keys(formData).forEach(key => {
                if (formData?.[key]) {
                    _facts[key] = "true"
                } else {
                    _facts[key] = "false"
                }
            });
            if (form?.rules?.length > 0 || form?.rules?.length > 0) {
                const rulesData = await productPageService.productFormRules(form.rules, _facts, form?.name);
                // console.log("::rulesData", _facts, rulesData);
                setShowProductDetail(rulesData?.finalResult || false)
            } else {
                setShowProductDetail(false)
            }

        } catch (err) {
            console.error(err)
        }
    };
    useEffect(() => {
        if (form?.name === FORM_NAMES.PRODUCT_FORM) {
            myFunction();
        }
    }, [formData]);

    useEffect(() => {
        console.log("=======================> FORMs", form)
    }, [])
    return (
        <>
            {
                // form?.name !== FORM_NAMES.PRODUCT_FORM ||
                //     showProductDetail
                //     ?
                <div className="" >
                    <fieldset disabled={form?.name == FORM_NAMES.PRODUCT_FORM && !showProductDetail ? "disabled" : ""}>
                        <h1 className="text-lg mb-4">{form?.form?.title}</h1>
                        <Component
                            themeConfig={themeConfig}
                            utmConfig={utmConfig}
                            form={form}
                            formName={formName}
                            pageRoute={pageRoute}
                        />
                    </fieldset>
                </div>
                //  : null
            }
        </>
    );
}

export default FormWrapper;