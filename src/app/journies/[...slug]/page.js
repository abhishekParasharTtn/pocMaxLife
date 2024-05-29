import { api } from "@/utils/api";
import { utmService } from "../../services/utmService";
import { AppLayout } from "../../../common/layouts/app/AppLayout";
import { use } from "react";

const page = {
  data: [
    {
      id: 1,
      attributes: {
        name: "personalDetails",
        slug: "personal-details",
        createdAt: "2024-05-23T10:22:51.840Z",
        updatedAt: "2024-05-24T09:39:14.906Z",
        publishedAt: "2024-05-23T10:22:53.646Z",
        layout: {
          id: 3,
          margin: null,
          padding: null,
          style: null,
        },
        sections: [
          {
            id: 4,
            __component: "container.form-container",
            name: "personalDetails",
          },
        ],
        previous: null,
        next: null,
      },
    },
    {
      id: 2,
      attributes: {
        name: "customerDetails",
        slug: "customer-details",
        createdAt: "2024-05-23T10:23:10.859Z",
        updatedAt: "2024-05-24T09:38:50.670Z",
        publishedAt: "2024-05-23T10:23:12.407Z",
        layout: {
          id: 4,
          margin: null,
          padding: null,
          style: null,
        },
        sections: [
          {
            id: 3,
            __component: "container.form-container",
            name: "customerDetails",
          },
        ],
        previous: null,
        next: null,
      },
    },
  ],
  meta: {
    pagination: {
      page: 1,
      pageSize: 25,
      pageCount: 1,
      total: 2,
    },
  },
};

async function fetchData(params) {
  const { slug } = params;
  const utmDetails = await utmService.getUtmDetails(slug);
  const themeConfig = await utmService.getThemeConfigData(utmDetails);
  const pages = await utmService.getPages(utmDetails);
  console.log(pages);
  return (
    <AppLayout
      themeConfig={themeConfig}
      // showNavigation={page?.journeyInfo?.config?.showNavigation}
      // groupType={page?.route?.meta?.groupType}
      page={pages}
      utmConfig={utmDetails}
    />
  );

  //  let response = await fetch(`http://localhost:3000/api/users/${userId}`);

  //   const products = await response.json();
  //   return products?.user;
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
  return paths;
}
