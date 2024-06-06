import { api } from "@/utils/api";
import { utmService } from "../../services/utmService";
import { AppLayout } from "../../../common/layouts/app/AppLayout";
import { use } from "react";
const fs = require("fs");

async function fetchData(params) {
  const { slug } = params;
  const utmDetails = await utmService.getUtmDetails(slug);
  const themeConfig = await utmService.getThemeConfigData(utmDetails);
  // const pagesData = await utmService.getpage(utmDetails, slug);
  const fieldConfigData = await utmService.getFormFieldConfigs(utmDetails);

  // const pages = utmService.getFormDataWithUpdatedDefaultValues(
  //   pagesData,
  //   fieldConfigData
  // );
  // fs.writeFile("themeConfig.json", JSON.stringify(themeConfig, null, 2), (err) => {
  //   if (err) {
  //     console.error("Error writing file", err);
  //   } else {
  //     console.log("Successfully wrote file");
  //   }
  // });
  return (
    <AppLayout
      themeConfig={themeConfig}
      // pageType={slug[1]}
      utmConfig={utmDetails}
      slug={slug}
      fieldConfigData={fieldConfigData}
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

// export async function generateStaticParams() {
//   const response = await api.get("/api/utm-configs?populate=*", {
//     cache: "no-store",
//   });

//   const paths = response?.data?.flatMap((route) =>
//     route?.attributes?.pages?.data?.map((page) => ({
//       slug: [route.attributes.utmCode, page.attributes.slug],
//     }))
//   );
//   return paths;
// }
