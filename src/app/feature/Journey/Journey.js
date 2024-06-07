"use client";
import { useEffect, useState } from "react";
import Page from "../Pages/Pages";
import { utmService } from "@/app/services/utmService";
import { Provider } from 'react-redux';
import store from '../../../redux/store'

import { productService } from "@/app/services/productService/productService";
import { productPageService } from "@/app/services/productPageService";

const Journey = ({
  themeConfig,
  utmConfig,
  slug,
  fieldConfigData
}) => {
  const [page, setPage] = useState(null);

  const getPageData = async () => {
    let pageData = await utmService.getpage(utmConfig, slug);
    console.log(pageData, "::getPageData");
    if (pageData && fieldConfigData) {
      pageData = utmService.getFormDataWithUpdatedDefaultValues(
        pageData,
        fieldConfigData
      );
    }
    setPage(pageData);
  };

  useEffect(() => {
    getPageData();
  }, []);

  useEffect(() => { }, [fieldConfigData]);


  return (
    <Provider store={store}>
      <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
        {page && (
          <Page
            utmConfig={utmConfig}
            themeConfig={themeConfig}
            page={page?.[0]}
          />
        )}
      </div>
    </Provider>
  )
}

export default Journey;
