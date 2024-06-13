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
  dataConfigs
  // pageType,
  // pages
}) => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(false);

  const getPageData = async () => {
    setLoading(true);
    try {
      let pageData = await utmService.getpage(utmConfig, slug);
      if (pageData && (fieldConfigData || dataConfigs)) {
        pageData = utmService.getFormFieldsMergedData(
          pageData,
          fieldConfigData
        );
        if (dataConfigs) {
          const formFieldsMergedData = utmService.getFormFieldsMergedData(
            pageData,
            fieldConfigData
          );
          pageData = utmService.getDataConfigMergedData(
            formFieldsMergedData,
            dataConfigs
          );
        }
      }
      setPage(pageData);
    } catch (error) {
      console.error("Error fetching page data:", error);
      setPage(null);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center min-h-[850px]">
        {loading ? (
          <Loader className="bg-default w-full" />
        ) : (
          page && (
            <Page
              utmConfig={utmConfig}
              themeConfig={themeConfig}
              page={page?.[0]}
              dataConfigs={dataConfigs}
            />
          )
        )}
      </div>
    </Provider>
  );
};

export default Journey;
