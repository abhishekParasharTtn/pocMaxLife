"use client";
import { useEffect, useState } from "react";
import Pages from "../Pages/Pages";
import { utmService } from "../../services/utmService";
import { productPageService } from "../../services/productPageService";

const Journey = ({ themeConfig, utmConfig, page, pageType, route }) => {
  const myFunction = async () => {
    const rulesData = await productPageService.productFormRules();
    console.log(rulesData, "::rulesData");
  };

  useEffect(() => {
    myFunction();
  });

  return (
    <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
      <h1>s</h1>
      {/* <Pages page={clientPages} utmConfig={utmConfig} themeConfig={themeConfig} pageType={clientPages.layout.name}></Pages> */}
    </div>
  );
};

export default Journey;
