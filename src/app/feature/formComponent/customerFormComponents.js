import Component from "@/app/feature/component/Component";
import FormWrapper from "../FormWrapper";

const CustomerFormComponents = ({ themeConfig, utmConfig, section, pages,formName,pageRoute }) => {
  return (
    <>
      {section?.forms?.length > 0 &&
        section?.forms.map((form, index) => {
          return <div className="form-container mb-20">
            {/* <h1 className="text-lg mb-4">{form?.form?.title}</h1> */}
            <FormWrapper
              key={formName + "_" +index}
              themeConfig={themeConfig}
              utmConfig={utmConfig}
              form={form}
              formName={formName}
              pageRoute={pageRoute}
            />
          </div>
        })
      }
    </>
  );
}

export default CustomerFormComponents;