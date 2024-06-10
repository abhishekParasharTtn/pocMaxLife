"use client";
import { useEffect, useState } from "react";
import Page from "../Pages/Pages";
import { utmService } from "@/app/services/utmService";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const Journey = ({
  themeConfig,
  utmConfig,
  slug,
  fieldConfigData,
  // pageType,
  // pages
}) => {
  const [page, setPage] = useState(null);

  const getPageData = async () => {
    try {
    let pageData = await utmService.getpage(utmConfig, slug);
    if (pageData && fieldConfigData) {
      pageData = utmService.getFormFieldsMergedData(pageData, fieldConfigData);
      const dataConfigs = await utmService.getDataConfigs(utmConfig?.dataConfig?.name);
      if(dataConfigs) {
        const formFieldsMergedData = utmService.getFormFieldsMergedData(pageData,fieldConfigData);
        pageData = utmService.getDataConfigMergedData(formFieldsMergedData,dataConfigs);
      } 
    }
    setPage(pageData);
    }catch (error) {
    console.error('Error fetching page data:', error);
    setPage(null); 
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  useEffect(() => {}, [fieldConfigData]);

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
  );
};

export default Journey;
