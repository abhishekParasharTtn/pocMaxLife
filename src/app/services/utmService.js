import { transformer } from "@/utils/transformer";
import { api } from "@/utils/api";
import { queries } from "@/graphQL/queries";
export const utmService = {
  transformUtmDetails: function (utmDetails) {
    return utmDetails?.[0];
  },
  dataFilter: function (array, criteria) {
    if (criteria.length === 0) {
      return array;
    } else {
      return array.filter((item) =>
        criteria.some((criterion) => item[criterion.key] === criterion.value)
      );
    }
  },
  transformPageData: async function (data, utmCode) {
    const gendersData = await utmService.getGendersData(utmCode);
    console.log(transformer.removeDatakeys(gendersData), "::test");
    const transformData = [];
    const dataStore = [];
    console.log(dataStore, "::test");
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
              //----------------------------------------------------------------
              if (component?.dataSourceName?.name) {
                const modifieUrl = component?.dataSourceName?.name
                  ?.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
                  .toLowerCase();
                dataStore.push({
                  url: modifieUrl,
                  dataSourceName: component?.dataSourceName?.name,
                });
                const optionData = fetch(
                  `http://localhost:1338/api/${modifieUrl}?populate=*`
                )
                  .then((res) => res.json())
                  .then((data) => {
                    //cb = data;
                    if (data?.data?.length > 0) {
                      // console.log();
                      // console.log(
                      //   utmService.dataFilter(
                      //     transformer.removeDatakeys(optionData?.data),
                      //     component?.dataFilter
                      //   ),
                      //   "::opetaionData"
                      // );
                      return {
                        ...component,
                        data: utmService.dataFilter(
                          transformer.removeDatakeys(data?.data),
                          component?.dataFilter
                        ),
                      };
                    }
                    console.log(data);
                    //return data;
                  });
                //const cd = optionData.then((data) => data);
                //console.log(optionData.then((data) => {}));

                // api.get(
                //   `/api/${modifieUrl}?populate=*`
                // ).then;
                //dataStore.push()
                // if (optionData?.data?.length > 0) {
                //   console.log();
                //   console.log(
                //     utmService.dataFilter(
                //       transformer.removeDatakeys(optionData?.data),
                //       component?.dataFilter
                //     ),
                //     "::opetaionData"
                //   );
                //   return {
                //     ...component,
                //     data: utmService.dataFilter(
                //       transformer.removeDatakeys(optionData?.data),
                //       component?.dataFilter
                //     ),
                //   };
                // }
              }

              // if (component.title === "Gender") {
              //   return {
              //     ...component,
              //     data: gendersData?.utmConfigs[0]?.dataConfig?.dataGenders,
              //   };
              // }
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
    console.log(dataStore, "::test");
    const dataConfig = [api.get(`/api/${utmCode}?populate=*`)];
    Promise.allSettled(
      dataStore?.map((item) => {
        let data = api.get(`/api/${item.url}?populate=*`);
        return { data, dataSourceName: item?.dataSourceName };
      })
    ).then((data) => {
      console.log(data, "::datayyy");
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
