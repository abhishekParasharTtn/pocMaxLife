import { transformer } from "@/utils/transformer";
import { api } from "@/utils/api";
import { queries } from "@/graphQL/queries";

export const utmService = {
  transformUtmDetails: function (utmDetails) {
    return utmDetails?.[0];
  },

  getUtmDetails: async function (slug) {
    const utmCode = slug[0];
    const utmDetails = await api.get(
      `/api/utm-configs?filters[utmCode][$eq]=${utmCode}&populate=*`
    );

    const updatedUtm = transformer.removeDataAttributes(utmDetails);
    return this.transformUtmDetails(updatedUtm);
  },
  getThemeConfig: async function (utmDetails) {
    const query = queries.getThemeConfig(utmDetails?.themeConfig?.name);
    const themeConfig = await api.get(null, query);
    return transformer.removeDataAttributes(themeConfig);
  },
};
