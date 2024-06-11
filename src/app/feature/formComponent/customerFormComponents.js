import Component from "@/app/feature/component/Component";

const CustomerFormComponents = ({
  themeConfig,
  utmConfig,
  section,
  pages,
  formName,
  pageRoute,
}) => {
  return (
    <div className="">
      {section?.forms?.length > 0 &&
        section?.forms.map((form, index) => {
          return (
            <div className="form-container mb-6" key={index}>
              <Component
                themeConfig={themeConfig}
                utmConfig={utmConfig}
                form={form}
                formName={formName}
                pageRoute={pageRoute}
              />
            </div>
          );
        })}
    </div>
  );
};

export default CustomerFormComponents;
