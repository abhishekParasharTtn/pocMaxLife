export const queries = {
  getThemeConfig: (name) => {
    return `query {
            themeConfigs(filters: { name: { eq: "${name}" } }) {
              data {
                attributes {
                  name
                  style
                  favicon
                  layout {
                    ... on ComponentLayoutLayout {
                      margin
                      padding
                      style
                      layoutOrder {
                        componentName
                        position
                      }
                      layout {
                        ... on LayoutEntityResponse {
                          data {
                            attributes {
                              name
                            }
                          }
                        }
                      }
                    }
                  }
                  sections {
                    ... on ComponentUiLogo {
                      name
                      altText
                      image {
                        data {
                          attributes {
                            name
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }`;
  },
};
