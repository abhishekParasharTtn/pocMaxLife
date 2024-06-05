import React from "react";
import FieldComponent from "@/app/feature/fieldComponents/fieldComponent";

const Component = ({
  themeConfig,
  utmConfig,
  pages,
  section,
  form
}) => {

    const componentHandler = () => {
        return ( form?.form?.components.map((component) => {
                return <FieldComponent
                    themeConfig={themeConfig}
                    utmConfig={utmConfig}
                    section={section}
                    pages={pages}
                    form={form}
                    component={component}
                />
            })
        )
    }

    return(
        <div>
            {componentHandler()}
        </div>
    )
}

export default Component;