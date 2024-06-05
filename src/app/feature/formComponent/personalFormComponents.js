import Section from "@/app/feature/Section/Section";
import React from "react";
import Component from "@/app/feature/component/Component";

const PersonalFormComponents = ({ themeConfig, utmConfig, section, pages}) => {

    const formsHandler = () => {
        return ( section?.forms.map((form) => {
                return <Component
                    themeConfig={themeConfig}
                    utmConfig={utmConfig}
                    section={section}
                    pages={pages}
                    form={form}
                />
            })
        )
    }

    return (
        <div>
            <div>{formsHandler()}</div>
        </div>
    );
};

export default PersonalFormComponents;