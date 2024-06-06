import React from "react";
import FieldComponent from "@/app/feature/fieldComponents/fieldComponent";

const Component = ({
    themeConfig,
    utmConfig,
    form = {},
    formName,
    pageRoute
    
}) => {
    const { form: { components } = {} } = form;

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