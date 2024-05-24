// app/[id]/page.js

import { use } from "react";

async function fetchData(id) {
  // Replace this with your data fetching logic
  let response;
  const userId = id.slug[0];
  if (userId === "2222") {
    response = await fetch(`http://localhost:3000/api/users/${userId}`, {
      cache: "no-store",
    });
  } else {
    response = await fetch("https://jsonplaceholder.typicode.com/users");
  }

  const products = await response.json();
  return products?.user;
}

export default function DynamicPage({ params }) {
  const data = use(fetchData(params));
  console.log("data....", data);
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
  const response = await fetch("http://localhost:3000/api/utms", {
    // cache: 'no-store',
  });
  const utms = await response.json();
  const paths = utms?.data?.flatMap((route) =>
    route.pages.map((page) => ({ slug: [route.code, page.name] }))
  );

  console.log("paths....", paths);
  return paths;
}
