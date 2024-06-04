import { api } from "@/utils/api";
import { utmService } from "../../services/utmService";
import { AppLayout } from "../../../common/layouts/app/AppLayout";
import { use } from "react";
const fs = require("fs");

async function fetchData(params) {
  const { slug } = params;
  console.log(slug, "::slug");
  const utmDetails = await utmService.getUtmDetails(slug);
  console.log(utmDetails, "::test");
  const themeConfig = await utmService.getThemeConfigData(utmDetails);
  console.log(themeConfig);
  const pages = await utmService.getpage(utmDetails, slug);
  console.log(pages);
  //const pagesData = await utmService.getPages(utmDetails);
  //const fieldConfigData = await utmService.getFormFieldConfigs(utmDetails);
  // const pages = utmService.getFormDataWithUpdatedDefaultValues(
  //   pagesData,
  //   fieldConfigData
  // );
  fs.writeFile("output.json", JSON.stringify(pages, null, 2), (err) => {
    if (err) {
      console.error("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
  return (
    <h1>hello</h1>
    // <AppLayout
    //   themeConfig={themeConfig}
    //   // showNavigation={page?.journeyInfo?.config?.showNavigation}
    //   // groupType={page?.route?.meta?.groupType}
    //   pageType={slug[1]}
    //   page={pages}
    //   utmConfig={utmDetails}
    // />
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
