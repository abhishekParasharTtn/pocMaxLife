// app/[id]/page.js

import { fetchDataFromAPI } from "@/utils/api";
import { use } from "react";

async function fetchData(id) {
  let response;
  const userId = id.slug[0];
  if (userId === "2222") {
    response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      cache: "no-store",
    });
  } else {
    response = await fetch(`http://localhost:3000/api/users/${userId}`);
  }

  const products = await response.json();
  return products?.user;
}

export default function DynamicPage({ params }) {
  const data = use(fetchData(params));

  return (
    <div>
      <h1>Dynamic Page</h1>
      <div>
        {data?.map((data, index) => (
          <>
            <div key={index}>{data?.code}</div>
            {data.pages.map((page, index) => {
              return <div key={index}>{page.name}</div>;
            })}
          </>
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const response = await fetchDataFromAPI("/api/utm-configs?populate=*", {
    cache: "no-store",
  });
  const paths = response?.data?.flatMap((route) =>
    route?.attributes?.pages?.data?.map((page) => ({
      slug: [route.attributes.utmCode, page.attributes.slug],
    }))
  );
  return paths;
}
