import { api } from "@/utils/api";
import { utmService } from "../../services/utmService";
import { AppLayout } from "../../../common/layouts/app/AppLayout";
import { use } from "react";
const fs = require("fs");

async function fetchData(params) {
  const { slug } = params; //customer detai
  console.log(slug, "slug");

  const utmDetails = await utmService.getUtmDetails(slug);
  const themeConfig = await utmService.getThemeConfigData(utmDetails);
  // const pages = await utmService.getPages(utmDetails);
  // console.log(utmDetails, "utmDetails"  )
  // console.log(themeConfig, "themeConfig"  )
  // fs.writeFile("output.json", JSON.stringify(pages, null, 2), (err) => {
  //   if (err) {
  //     console.error("Error writing file", err);
  //   } else {
  //     console.log("Successfully wrote file");
  //   }
  // });
   const pages ={
    pageType:null
   }
   const route = {
    utmCode:slug[0],
    pageName:slug[1]
   }
  return (
    <AppLayout
      themeConfig={themeConfig}
      // showNavigation={page?.journeyInfo?.config?.showNavigation}
      // groupType={page?.route?.meta?.groupType}
      pageType={slug[1]}
      page={pages}
      utmConfig={utmDetails}
      route={route}
    />
  );
  // return <h1>hello</h1>

  //  let response = await fetch(`http://localhost:3000/api/users/${userId}`);

  //   const products = await response.json();
  //   return products?.user;
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
