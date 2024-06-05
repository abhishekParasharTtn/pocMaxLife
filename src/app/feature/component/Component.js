import React from "react";
import FieldComponent from "@/app/feature/fieldComponents/fieldComponent";

const Component = ({
    themeConfig,
    utmConfig,
    //   pages,
    //   section,
    form = {}
}) => {
    const { form: { components } = {} } = form;
    return (
        <div>
            {
                components.length > 0 &&
                components.map((component) => {
                    return <FieldComponent
                        key={component?.name}
                        // themeConfig={themeConfig}
                        // utmConfig={utmConfig}
                        // section={section}
                        // pages={pages}
                        // form={form}
                        component={component}
                    />
                })
            }
        </div>
    )
}

export default Component;