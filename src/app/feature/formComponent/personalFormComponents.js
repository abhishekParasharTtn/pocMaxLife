import { useRouter } from "next/navigation";
import React from "react";
import FormWrapper from "../formWrapper";

const PersonalFormComponents = ({
  themeConfig,
  utmConfig,
  section,
  page,
  formName,
  pageRoute,
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
                <FormWrapper
                  key={index}
                  themeConfig={themeConfig}
                  utmConfig={utmConfig}
                  form={form}
                  formName={formName}
                  pageRoute={pageRoute}
                  page={page}

                />
            );
          })}
      </div>
    </>
  );
};

export default PersonalFormComponents;
