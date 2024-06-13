import Component from "@/app/feature/component/Component";
import FormWrapper from "../formWrapper";

const CustomerFormComponents = ({
  themeConfig,
  utmConfig,
  section,
  page,
  formName,
  pageRoute,
}) => {
  return (
    <div className="">
      {section?.forms?.length > 0 &&
        section?.forms.map((form, index) => {
          return (
            // <div
            //   className="form-container mb-5 border border-[#eee]"
            //   style={{ background: "#f9f9f9", padding: "20px 20px 40px" }}
            //   key={index}
            // >
            //   <h1 className="text-lg mb-8 uppercase">{form?.form?.title}</h1>
            //   {/* <div className="form-container mb-6" key={index}> */}
              <FormWrapper
                key={index}
                themeConfig={themeConfig}
                utmConfig={utmConfig}
                form={form}
                formName={formName}
                pageRoute={pageRoute}
                page={page}
              />
            // </div>
          );
        })}
    </div>
  );
};

export default CustomerFormComponents;
