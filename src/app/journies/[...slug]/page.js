import { api } from "@/utils/api";
import { utmService } from "../../services/utmService";
import { AppLayout } from "../../../common/layouts/app/AppLayout";
import { use } from "react";
const fs = require("fs");

async function fetchData(params) {
  console.log(params);
  const { slug } = params;
  const utmDetails = await utmService.getUtmDetails(slug);
  console.log("utmDetails", utmDetails);
  const themeConfig = await utmService.getThemeConfigData(utmDetails);
  const pagesData = await utmService.getpage(utmDetails, slug);
  const fieldConfigData = await utmService.getFormFieldConfigs(utmDetails);
  const formFieldsMergedData = utmService.getFormFieldsMergedData(
    pagesData,
    fieldConfigData
  );

  const dataConfigs = await utmService.getDataConfigs(
    utmDetails?.dataConfig?.name
  );
  console.log("dataConfig", dataConfigs);

  const pageData = utmService.getDataConfigMergedData(
    formFieldsMergedData,
    dataConfigs
  );
  fs.writeFile("pages.json", JSON.stringify(pageData, null, 2), (err) => {
    if (err) {
      console.error("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });

  return (
    <AppLayout
      themeConfig={themeConfig}
      // pageType={slug[1]}
      utmConfig={utmDetails}
      slug={slug}
      fieldConfigData={fieldConfigData}
      dataConfigs={dataConfigs}
      pageData={pageData}
      // showNavigation={page?.journeyInfo?.config?.showNavigation}
      // groupType={page?.route?.meta?.groupType}
      // pages={pages}
    />
  );
}

export default function DynamicPage({ params }) {
  const data = use(fetchData(params));
  return data;
}

export async function generateStaticParams() {
  const response = await api.get("/api/utm-configs?populate=*", {
    cache: "no-store",
  });

  const paths = response?.data?.flatMap((route) =>
    route?.attributes?.pages?.data?.map((page) => ({
      slug: [route.attributes.utmCode, page.attributes.slug],
    }))
  );
  console.log("paths", paths);
  return paths;
}
