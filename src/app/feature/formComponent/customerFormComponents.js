import Component from "@/app/feature/component/Component";

const CustomerFormComponents = ({ themeConfig, utmConfig, section, pages }) => {
  return (
    <div className="">
      {section?.forms?.length > 0 &&
        section?.forms.map((form, index) => {
          return <div className="form-container mb-6">
            <Component
              key={index}
              themeConfig={themeConfig}
              utmConfig={utmConfig}
              // section={section}
              // pages={pages}
              form={form}
            />
          </div>
        })
      }
    </div>
  );
}

export default CustomerFormComponents;