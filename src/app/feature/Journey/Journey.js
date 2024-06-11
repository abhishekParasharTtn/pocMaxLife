"use client";
import { useEffect, useState } from "react";
import Page from "../Pages/Pages";
import { utmService } from "@/app/services/utmService";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Loader from "../component/Loader/Loader";

const Journey = ({
  themeConfig,
  utmConfig,
  slug,
  fieldConfigData,
  // pageType,
  // pages
}) => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPageData = async () => {
    setLoading(true);
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
      setLoading(false);

    } catch (error) {
      console.error('Error fetching page data:', error);
      setPage(null);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  useEffect(() => {}, [fieldConfigData]);

  return (
    <Provider store={store}>
      <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
        {
          loading ? <Loader />
          :
          page && (
            <Page
              utmConfig={utmConfig}
              themeConfig={themeConfig}
              page={page?.[0]}
            />
          )
        }
      </div>
    </Provider>
  );
};

export default Journey;
