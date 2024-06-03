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
    const transformData = [];
    const dataStore = [];
        data.map((_page) => {
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
              if (component?.dataSourceName?.name) {
                const modifieUrl = component?.dataSourceName?.name
                  ?.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)
                  .toLowerCase();
                dataStore.push({
                  url: modifieUrl,
                  dataSourceName: component?.dataSourceName?.name,
                });
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

    const pageData =
      dataStore.length !== 0
        ? await Promise.all(
            dataStore?.map(async (item) => {
              const response = await api.get(`/api/${item.url}?populate=*`);
              return {
                data: response?.data,
                dataSourceName: item?.dataSourceName,
              };
            })
          )
        : [];
    const mergeDataSources = (arr1, arr2) => {
      const dataSourceMap = new Map();

      // Create a map of dataSourceName to data from array1
      arr1.forEach((item) => {
        if (item.data) {
          const transformedData = item.data.map((dataItem) => {
            const { id, attributes, ...rest } = dataItem;
            return { ...rest, ...attributes };
          });
          dataSourceMap.set(item.dataSourceName, transformedData);
        }
      });

      // Function to update the component with the corresponding data
      const updateComponents = (components) => {
        components.forEach((component) => {
          const dataSourceName = component.dataSourceName?.name;
          if (dataSourceName && dataSourceMap.has(dataSourceName)) {
            let data = dataSourceMap.get(dataSourceName);

            // Apply dataFilter if present
            if (component.dataFilter && component.dataFilter.length > 0) {
              data = data.filter((item) => {
                return component.dataFilter.some((filter) => {
                  return item[filter.key] === filter.value;
                });
              });
            }

            component.data = data;
          }
        });
      };

      // Iterate through array2 and update components with data from array1
      arr2.forEach((section) => {
        if (section.sections) {
          section.sections.forEach((subSection) => {
            if (subSection.form && subSection.form.components) {
              updateComponents(subSection.form.components);
            }
          });
        }
      });

      return arr2;
    };

    const updatedTransformData = mergeDataSources(pageData, transformData);
    return updatedTransformData[0];
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
  getPages: async function (pageName, utmCode) {
    // const names = [];
    // for (const key in utmDetails?.pages) {
    //   if (utmDetails.pages.hasOwnProperty(key)) {
    //     names.push(utmDetails.pages[key].name);
    //   }
    // }
    // const pageData = await Promise.all(
    //   names?.map((item) => {
    //     let data = api.get(null, queries.getPages(item));
    //     return data;
    //   })
    // );
     
    let pageData = await api.get(null, queries.getPages(pageName));
    const filterPageData = transformer.removeDatakeys(pageData);
    debugger;
    return this.transformPageData(filterPageData.pages, utmCode);
  },
};
