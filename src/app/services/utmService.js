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
  transformOptions: function (options) {
    return options.map((item) => {
      if (item.data) {
        return {
          dataSourceName: item.dataSourceName,
          data: item.data.map((dataItem) => ({
            ...dataItem.attributes,
          })),
        };
      }
      return item;
    });
  },
  applyDataFilter: function (payload) {
    payload.forEach((item) => {
      item.sections.forEach((section) => {
        section.forms.forEach((form) => {
          form.form.components.forEach((component) => {
            const dataFilter = component.dataFilter || [];
            if (dataFilter.length > 0) {
              const filteredData = component.data.filter((dataItem) => {
                return dataFilter.some(
                  (filter) => dataItem[filter.key] === filter.value
                );
              });
              component.data = filteredData;
            } else {
              // If dataFilter is empty, return all data values
              component.data = component.data;
            }
          });
        });
      });
    });
    return payload;
  },
  transforPageData: async function (data, utmCode) {
    const dataSourceNames = [];

    function camelToHyphen(camelCase) {
      return {
        url: camelCase.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
        name: camelCase,
      };
    }

    function transform(obj) {
      if (Array.isArray(obj)) {
        return obj
          .map((item) => transform(item))
          .filter((item) => item !== null);
      } else if (obj && typeof obj === "object") {
        if (obj.visibility === false) {
          return null;
        }
        const newObj = {};
        for (const key in obj) {
          if (key === "fieldName" && obj[key].name) {
            newObj.name = obj[key].name;
          } else if (key === "dataSourceName" && obj[key].name) {
            const hyphenatedName = camelToHyphen(obj[key].name);
            dataSourceNames.push(hyphenatedName);
            newObj[key] = obj[key].name;
          } else if (key === "next" && obj[key].url) {
            newObj[key] = obj[key].url;
          } else if (key === "previous" && obj[key].url) {
            newObj[key] = obj[key].url;
          } else {
            newObj[key] = transform(obj[key]);
          }
          // Add utmCode after the slug
          if (key === "slug") {
            newObj[key] = obj[key];
            newObj["utmCode"] = utmCode;
          }
        }
        return newObj;
      }
      return obj;
    }

    const transformedPageData = transform(data);
    const optionsData =
      dataSourceNames.length !== 0
        ? await Promise.all(
            dataSourceNames?.map(async (item) => {
              const response = await api.get(`/api/${item.url}?populate=*`);
              return {
                dataSourceName: item?.name,
                data: response?.data,
              };
            })
          )
        : [];

    function appendOptionsData(pageData, optionsData) {
      const optionsDataMap = optionsData.reduce((acc, option) => {
        acc[option.dataSourceName] = option.data;
        return acc;
      }, {});

      pageData.forEach((page) => {
        page.sections.forEach((section) => {
          section.forms.forEach((form) => {
            form.form.components.forEach((component) => {
              if (
                component.dataSourceName &&
                optionsDataMap[component.dataSourceName]
              ) {
                component.data = optionsDataMap[component.dataSourceName];
              }
            });
          });
        });
      });
      return pageData;
    }
    const pageDataWithOptions = appendOptionsData(
      transformedPageData,
      this.transformOptions(optionsData)
    );
    const pageDataWithDataFilterOptions =
      this.applyDataFilter(pageDataWithOptions);
    return pageDataWithDataFilterOptions;
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
  getpage: async function (utmDetails, slug) {
    const page = utmDetails.pages.find((route) => route.slug === slug[1]);
    let pageData = await api.get(null, queries.getPages(page.name));
    const filterPageData = transformer.removeDatakeys(pageData);
    return this.transforPageData(filterPageData.pages, utmDetails.utmCode);
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
  getFormFieldConfigs: async function (utmDetails) {
    const fieldConfigsData = await utmService.getFormFieldConfigsData(
      utmDetails?.formFieldConfig?.name
    );
    return fieldConfigsData?.formFieldConfigs[0]?.fieldConfig;
  },
  getFormFieldConfigsData: async function (name) {
    const query = queries.getFormFieldConfigs(name);
    const formFieldConfigs = await api.get(null, query);
    return transformer.removeDatakeys(formFieldConfigs);
  },
  getDataConfigs: async function (name) {
    const query = queries.getDataConfigs(name);
    const dataConfigs = await api.get(null, query);
    return transformer.removeDatakeys(dataConfigs);
  },
  getFormFieldsMergedData: function (pageData, formFieldConfigs) {
    const valueContains = [
      "visibility",
      "defaultValue",
      "label",
      "placeholder",
    ];
    if (formFieldConfigs) {
      pageData.forEach((page) => {
        page.sections.forEach((section) => {
          section.forms.forEach((form) => {
            form.form.components.forEach((component) => {
              formFieldConfigs.forEach((config) => {
                if (component.name === config.fieldName.name) {
                  valueContains.forEach((prop) => {
                    if (config[prop] !== null && config[prop] !== undefined) {
                      component[prop] = config[prop];
                    }
                  });
                }
              });
            });
          });
        });
      });
    }

    return pageData;
  },
  getDataConfigMergedData: function (pageData, dataConfigs) {
    if (dataConfigs) {
      const configMap = dataConfigs.dataConfigs.reduce((map, config) => {
        Object.keys(config).forEach((key) => {
          map[key] = config[key];
        });
        return map;
      }, {});

      pageData.forEach((page) => {
        page.sections.forEach((section) => {
          section.forms.forEach((form) => {
            form.form.components.forEach((component) => {
              if (component.dataSourceName) {
                const dataSource = configMap[component.dataSourceName];
                if (dataSource && dataSource.length > 0) {
                  component.data = dataSource;
                }
              }
            });
          });
        });
      });
    }
    return pageData;
  },
};
