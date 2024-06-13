import { useRouter } from "next/navigation";
import React from "react";
import FormWrapper from "../formWrapper";

const PersonalFormComponents = ({
  themeConfig,
  utmConfig,
  section,
  pages,
  formName,
  pageRoute,
  dataConfigs,
  setLoading,
}) => {
  const router = useRouter();
  const backHandler = (e) => {
    console.log("backhandler");

    router.back();
  };
  return (
    <>
      <button
        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-primary hover:text-white"
        onClick={backHandler}
      >
        Back
      </button>
      <div>
        {section?.forms?.length > 0 &&
          section?.forms.map((form, index) => {
            return (
              <div
                className="form-container mb-5 border border-[#eee]"
                style={{ background: "#f9f9f9", padding: "20px 20px 40px" }}
              >
                <h1 className="text-lg mb-8 uppercase">{form?.form?.title}</h1>
                <FormWrapper
                  setLoading={setLoading}
                  key={index}
                  themeConfig={themeConfig}
                  utmConfig={utmConfig}
                  form={form}
                  formName={formName}
                  pageRoute={pageRoute}
                  dataConfigs={dataConfigs}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default PersonalFormComponents;
