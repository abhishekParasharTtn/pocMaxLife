import { transformer } from "@/utils/transformer";
import { api } from "@/utils/api";
import { queries } from "@/graphQL/queries";
const fs = require("fs");
export const utmService = {
  transformUtmDetails: function (utmDetails) {
    return utmDetails?.[0];
  },
  transformPageData: function (data) {
    const transformData = data?.map((page) => {
      console.log(page, "::page");
      const { pages: _page = {} } = page;
      const { sections = {}, layout } = _page;
      const { form = {} } = sections;
      const {
        layout: { name },
        ...layoutData
      } = layout;
      console.log(_page, "::page");
      return {
        name: _page?.name,
        id: sections?.id,
        route: {
          current: _page?.slug,
          previous: _page?.next?.previous?.url,
          next: _page?.previous?.next?.url,
        },
        layout: {
          name,
          ...layoutData,
        },
        form,
      };
    });
    return transformData;
  },
  getUtmDetails: async function (slug) {
    const utmCode = slug[0];
    const utmDetails = await api.get(
      `/api/utm-configs?filters[utmCode][$eq]=${utmCode}&populate=*`
    );
    console.log(utmDetails, "::utmDetails");
    const updatedUtm = transformer.removeDataAttributes(utmDetails);
    return this.transformUtmDetails(updatedUtm);
  },
  getThemeConfig: async function (utmDetails) {
    const query = queries.getThemeConfig(utmDetails?.themeConfig?.name);
    const themeConfig = await api.get(null, query);
    console.log(themeConfig, "::themeConfig");
    console.log(transformer.removeDataAttributes(themeConfig));
    return transformer.removeDataAttributes(themeConfig);
  },
  getPages: async function (utmDetails) {
    const names = [];
    for (const key in utmDetails.pages) {
      if (utmDetails.pages.hasOwnProperty(key)) {
        names.push(utmDetails.pages[key].name);
      }
    }
    const pageData = await Promise.all(
      names?.map((item) => {
        let data = api.get(null, queries.getPages(item));
        return data;
      })
    );
    const filterPageData = transformer.removeDatakeys(pageData);
    console.log(this.transformPageData(filterPageData));
    console.log(transformer.removeDatakeys(pageData), "::pageData");

    fs.writeFile(
      "output.json",
      JSON.stringify(this.transformPageData(filterPageData), null, 2),
      (err) => {
        if (err) {
          console.error("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
        }
      }
    );
    return pageData;
    //return transformer.removeDataAttributes(pageData);
  },
};
