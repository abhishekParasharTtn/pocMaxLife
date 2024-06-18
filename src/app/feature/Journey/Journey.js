"use client";
import { useEffect, useState } from "react";
import Page from "../Pages/Pages";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import Loader from "../component/Loader/Loader";

const Journey = ({ themeConfig, utmConfig, dataConfigs, pageData }) => {
  const [loading, setLoading] = useState(false);
  console.log(pageData, "::pagedata");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider store={store}>
      <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center min-h-[850px]">
        {loading && <Loader />}

        {pageData && (
          <Page
            utmConfig={utmConfig}
            themeConfig={themeConfig}
            page={pageData?.[0]}
            dataConfigs={dataConfigs}
          />
        )}
      </div>
    </Provider>
  );
};

export default Journey;
