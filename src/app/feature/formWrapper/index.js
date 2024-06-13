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
    pageRoute,
    dataConfigs,
    page
}) => {

    const formData = useSelector((state) => state.forms?.[page?.name]) || {};
    const [visibility, setVisibility] = useState(form?.visibility);
    const [isDisabled, setIsDisabled] = useState(form?.disable)
    // console.log("::formData===================================kkkkkkkkkkkkkk", isDisabled);
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
            if (form?.rules?.length > 0) {
                const rulesData = await productPageService.productFormRules(form.rules, _facts, form?.name);
                // console.log("==================>         ???", rulesData)
                if (rulesData && rulesData?.finalOutput?.length > 0) {
                    rulesData?.finalOutput?.forEach(finalOutput => {
                        setIsDisabled(finalOutput?.isDisable)
                        setVisibility(finalOutput?.isVisible)
                    });
                } else {
                    setIsDisabled(form?.disable)
                    setVisibility(form?.visibility)
                }
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


    return (
        <>
            {
                // form?.name !== FORM_NAMES.PRODUCT_FORM ||
                //     showProductDetail
                //     ?
                visibility && (
                    <div
                        className="form-container mb-5 border border-[#eee]"
                        style={{ background: "#f9f9f9", padding: "20px 20px 40px" }}
                    >
                        <h1 className="text-lg mb-8 uppercase">{form?.form?.title}</h1>
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
                                page={page}
                                dataConfigs={dataConfigs}
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