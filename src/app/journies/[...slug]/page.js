// app/[id]/page.js

import { api } from "@/utils/api";

import {utmService} from "../../services/utmService";
import { use } from "react";

async function fetchData(params) {
  const {slug} = params; 
  const utmDetails = await utmService.getUtmDetails(slug);
  const themeConfig = await utmService.getThemeConfig(utmDetails);

  console.log('utmDetails...', utmDetails);
  console.log('themeConfig...', themeConfig);

//  let response = await fetch(`http://localhost:3000/api/users/${userId}`);

//   const products = await response.json();
//   return products?.user;
}

export default function DynamicPage({ params }) {
  const data = use(fetchData(params));
   

  return (
    <div>
      <h1>Dynamic Page</h1>
      {/* <div>
        {data?.map((data, index) => (
          <>
            <div key={index}>{data?.code}</div>
            {data.pages.map((page, index) => {
              return <div key={index}>{page.name}</div>;
            })}
          </>
        ))}
      </div> */}
    </div>
  );
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
  return paths;
}
