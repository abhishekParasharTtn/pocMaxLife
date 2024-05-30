import { transformer } from "@/utils/transformer";
import { api } from "@/utils/api";
import { queries } from "@/graphQL/queries";
export const utmService = {
  transformUtmDetails: function (utmDetails) {
    return utmDetails?.[0];
  },
  transformPageData: async function (data, utmCode) {
    const gendersData = await utmService.getGendersData(utmCode);
    console.log(transformer.removeDatakeys(gendersData), "::test");
    const transformData = [];
    data?.map((pages) => {
      return pages.pages.map((_page) => {
        const { sections = {}, layout = {} } = _page;
        const {
          layout: { name },
          ...layoutData
        } = layout;

        const filteredSections = sections.map((section) => {
          const filteredComponents = section.form.components
            .filter((component) => component.visibility !== false)
            .map((component) => {
              if (component.fieldName && component.fieldName.name) {
                const { fieldName, ...rest } = component;
                return {
                  ...rest,
                  name: fieldName.name,
                };
              }
              return component;
            })
            .map((component) => {
              if (component.title === "Gender") {
                return {
                  ...component,
                  data: gendersData?.utmConfigs[0]?.dataConfig?.dataGenders,
                };
              }
              return component;
            });
          return {
            ...section,
            form: {
              ...section.form,
              components: filteredComponents,
            },
          };
        });

        transformData.push({
          name: _page?.name,
          utmCode,
          route: {
            current: _page?.slug,
            previous: _page?.next?.url,
            next: _page?.previous?.url,
          },
          layout: {
            name,
            ...layoutData,
          },
          sections: filteredSections,
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
  getThemeConfigData: async function (utmDetails) {
    const query = queries.getThemeConfig(utmDetails?.themeConfig?.name);
    const themeConfig = await api.get(null, query);
    return transformer.removeDatakeys(themeConfig);
  },
  getPages: async function (utmDetails) {
    const names = [];
    for (const key in utmDetails?.pages) {
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
    return this.transformPageData(filterPageData, utmDetails.utmCode);
  },
  getGendersData: async function (utmCode) {
    const query = queries.getGenders(utmCode);
    const genders = await api.get(null, query);
    return transformer.removeDatakeys(genders);
  },
};
