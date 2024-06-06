import React, { useEffect } from "react";
import FieldComponent from "@/app/feature/fieldComponents/fieldComponent";
import { productPageService } from "@/app/services/productPageService";

const Component = ({
  themeConfig,
  utmConfig,
  //   pages,
  //   section,
  form = {},
}) => {
  const { form: { components } = {} } = form;
  console.log(form.rules);
  const myFunction = async () => {
    const rulesData = await productPageService.productFormRules(form.rules);
    console.log(rulesData, "::rulesData");
  };
  useEffect(() => {
    myFunction();
  });

  return (
    <div className="grid grid-cols-2 gap-10">
      {components.length > 0 &&
        components.map((component) => {
          return (
            <FieldComponent
              key={component?.name}
              // themeConfig={themeConfig}
              // utmConfig={utmConfig}
              // section={section}
              // pages={pages}
              // form={form}
              component={component}
            />
          );
        })}
    </div>
  );
};

export default Component;
