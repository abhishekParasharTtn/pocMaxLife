import { transformer } from "@/utils/transformer";
import { api } from "@/utils/api";
import { queries } from "@/graphQL/queries";
const fs = require("fs");
export const utmService = {
  transformUtmDetails: function (utmDetails) {
    return utmDetails?.[0];
  },
  transformPageData: function (data) {
    const transformData = [];
    data?.map((pages) => {
      return pages.pages.map((_page) => {
        const { sections = {}, layout = {} } = _page;
        const {
          layout: { name },
          ...layoutData
        } = layout;

        transformData.push({
          name: _page?.name,
          route: {
            current: _page?.slug,
            previous: _page?.next?.url,
            next: _page?.previous?.url,
          },
          layout: {
            name,
            ...layoutData,
          },
          sections,
        });
      });
    });
    return transformData;
  },
  getUtmDetails: async function (slug) {
    const utmCode = slug[0];
    const utmDetails = await api.get(
      `/api/utm-configs?filters[utmCode][$eq]=${utmCode}&populate=*`
    );
    const updatedUtm = transformer.removeDatakeys(utmDetails);
    return this.transformUtmDetails(updatedUtm);
  },
  getThemeConfig: async function (utmDetails) {
    const query = queries.getThemeConfig(utmDetails?.themeConfig?.name);
    const themeConfig = await api.get(null, query);
    return transformer.removeDatakeys(themeConfig);
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
    return this.transformPageData(filterPageData);
  },
};
