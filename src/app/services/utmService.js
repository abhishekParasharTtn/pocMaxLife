import { transformer } from "@/utils/transformer";
import { api } from "@/utils/api";
import { queries } from "@/graphQL/queries";
const fs = require("fs");
export const utmService = {
  transformUtmDetails: function (utmDetails) {
    return utmDetails?.[0];
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
    console.log(pageData, "::pageData");
    fs.writeFile("output.json", JSON.stringify(pageData, null, 2), (err) => {
      if (err) {
        console.error("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
    return pageData;
    //return transformer.removeDataAttributes(pageData);
  },
};
