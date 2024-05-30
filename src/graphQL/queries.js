const components = {
  layout: `layout {
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
  `,
  input: ` ... on ComponentFormInput {
  __typename
  fieldName {
    data {
      attributes {
        name
      }
    }
  }
  type
  label
  placeholder
  suggestion
  visibility
  style
}`,
  dobSingleInput: `... on ComponentFormDobSingleInput {
  __typename  
  name
  label
  placeholder
  fieldName {
    data {
      attributes {
        name
      }
    }
  }
  visibility
}`,
  gender: `... on ComponentUiOption {
  __typename  
  title
  description
  dataSourceName {
    data {
      attributes {
        name
      }
    }
  }
  componentType
  style
  visibility
  label
  placeholder
  fieldName {
    data {
      attributes {
        name
      }
    }
  }
  popUp {
    data {
      attributes {
        name
      }
    }
  }
  dataFilter {
    key
    value
  }
}
`,
  buttons: `... on ComponentUiButton {
  __typename
  name
  type
  label
  link
}`,
  phoneNumber: `... on ComponentFormPhoneNumber {
  __typename  
  name
  label
  placeholder
  fieldName {
    data {
      attributes {
        name
      }
    }
  }
  visibility
  dataSourceName {
    data {
      attributes {
        name
      }
    }
  }
  dataFilter {
    key
    value
  }
}`,
  checkBox: `... on ComponentUiCheckbox {
  __typename  
  name
  label
}`,
  toggleButton: ` ... on ComponentUiToggleSwitch {
  __typename  
  name
  label
}`,
};
export const queries = {
  getThemeConfig: (name) => {
    return `query {
            themeConfigs(filters: { name: { eq: "${name}" } }) {
              data {
                attributes {
                  name
                  style
                  favicon
                  ${components.layout}
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

  getPages: (formName) => {
    return `query {
      pages(filters: { name: { eq: "${formName}" } }) {
        data {
          attributes {
            name
            slug
            next {
              url
            }
            previous {
              url
            }
            ${components.layout}
            sections {
              ... on ComponentContainerFormContainer {
                name
                form {
                  ... on FormEntityResponse {
                    data {
                      attributes {
                        name
                        title
                        subTitle
                        components {
                          ${components.input}
                          ${components.dobSingleInput}
                          ${components.gender}
                          ${components.buttons}
                          ${components.phoneNumber}
                          ${components.checkBox}
                          ${components.toggleButton}
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    `;
  },

  getGenders: (utmCode) => {
    return `query {
    utmConfigs(filters: { utmCode: { eq: "${utmCode}" } }) {
    data {
      attributes {
        dataConfig {
          ... on DataConfigEntityResponse {
            data {
              ... on DataConfigEntity {
                attributes {
                  dataGenders {
                    data {
                      attributes {
                        name
                        label
                        value
                        icon {
                          data {
                            attributes {
                              name
                              alternativeText
                              caption
                              width
                              height
                              formats
                              hash
                              ext
                              mime
                              size
                              url
                              previewUrl
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
  },
};
