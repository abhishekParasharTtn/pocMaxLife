"use client";
import { useEffect } from "react";
import Pages from "../Pages/Pages";
import { productPageService } from "@/app/services/productPageService";

const Journey = ({ themeConfig, utmConfig, page, pageType }) => {
  useEffect(() => {
    const rulesData = productPageService.productFormRules();
    console.log(rulesData);
  }, []);
  return (
    <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
      <Pages
        page={page}
        utmConfig={utmConfig}
        themeConfig={themeConfig}
        pageType={pageType}
      ></Pages>
    </div>
  );
};

export default Journey;
