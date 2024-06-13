import Section from "@/app/feature/Section/Section";
import React, { useEffect, useState } from "react";
import Component from "@/app/feature/component/Component";
import { useSelector } from "react-redux";
import { productPageService } from "@/app/services/ruleEngine/productPageService";
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

    const formData = useSelector((state) => state.forms.productDetails) || {};
    const [visibility, setVisibility] = useState(form?.visibility);
    const [isDisabled, setIsDisabled] = useState(form?.disable)
    const myFunction = async () => {
        try {
            console.log("::formData", formData);
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
                console.log("::rulesData", _facts, rulesData);
                setIsDisabled(!rulesData?.finalResult)
            } else {
                // setShowProductDetail(false)
            }

        } catch (err) {
            console.error(err)
        }
    };
    useEffect(() => {
        if (form?.rules?.length > 0) {
            myFunction();
        }
    }, [formData]);

    console.log("::isDisabled", form);

    return (
        <>
            {
                // form?.name !== FORM_NAMES.PRODUCT_FORM ||
                //     showProductDetail
                //     ?
                visibility && (
                    <div className="" >
                        <fieldset
                            disabled={isDisabled}
                        >
                            <Component
                                themeConfig={themeConfig}
                                utmConfig={utmConfig}
                                form={form}
                                formName={formName}
                                pageRoute={pageRoute}
                                disabled={isDisabled}
                            />
                        </fieldset>
                    </div>
                )
                //  : null
            }
        </>
    );
}

export default FormWrapper;