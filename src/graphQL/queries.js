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
  defaultValue
  rules {
    id
    relationBetweenAnyAll
    relationWithNextRule
    any {
      id
      fact {
        data {
          attributes {
           name
          }
        }
      }
      operator
      customValue
      value
      values {
        value
        customValue
      }
    }
    all {
      id
      fact {
        data {
          attributes {
              name
          }
        }
      }
      operator
      customValue
      value
      values {
       value
       customValue
      }
    }
    roleOutput {
      value
      isVisible
      isDisable
    }
  }
}`,
  dobSingleInput: `... on ComponentFormDobSingleInput {
  __typename  
  name
  label
  placeholder
  defaultValue
  fieldName {
    data {
      attributes {
        name
      }
    }
  }
  visibility
  rules {
    id
    relationBetweenAnyAll
    relationWithNextRule
    any {
      id
      fact {
        data {
          attributes {
           name
          }
        }
      }
      operator
      customValue
      value
      values {
        value
        customValue
      }
    }
    all {
      id
      fact {
        data {
          attributes {
              name
          }
        }
      }
      operator
      customValue
      value
      values {
       value
       customValue
      }
    }
    roleOutput {
      value
      isVisible
      isDisable
    }
  }
}`,
  gender: `... on ComponentUiOption {
  __typename  
  title
  description
  defaultValue
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
  defaultValue
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
  rules {
    id
    relationBetweenAnyAll
    relationWithNextRule
    any {
      id
      fact {
        data {
          attributes {
           name
          }
        }
      }
      operator
      customValue
      value
      values {
        value
        customValue
      }
    }
    all {
      id
      fact {
        data {
          attributes {
              name
          }
        }
      }
      operator
      customValue
      value
      values {
       value
       customValue
      }
    }
    roleOutput {
      value
      isVisible
      isDisable
    }
  }  
}`,
  checkBox: `... on ComponentUiCheckbox {
  __typename  
  name
  label
  defaultValue
}`,
  toggleButton: ` ... on ComponentUiToggleSwitch {
  __typename  
  name
  label
  defaultValue
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
              __typename
              ... on ComponentContainerFormContainer {
                layout {
                  id
                  margin
                  padding
                  style
                  layoutOrder {
                    id
                    componentName
                    position
                  }
                  layout {
                    data {
                      attributes {
                        name
                        __typename
                        type
                      }
                    }
                  }
                }
                forms {
                  id
                  name
                  form {
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
                  },
                  rules {
                id
                relationBetweenAnyAll
                relationWithNextRule
                any {
                  id
                  ... on ComponentLogicalRule {
                    id
                    fact {
                      data {
                        attributes {
                          name
                        }
                      }
                    }
                  }
                  fact {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  operator
                  customValue
                  value
                  values {
                    value
                    customValue
                  }
                  __typename
                }
                all {
                  fact {
                    data {
                      attributes {
                        name
                      }
                    }
                  }
                  operator
                  customValue
                  value
                  values {
                    value
                    customValue
                  }
                }
                roleOutput {
                  value
                  isVisible
                  isDisable
                  key
                }
                
              }
              
                }
                button {
                  id
                  name
                  type
                  label
                  link
                  __typename
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
  getFormFieldConfigs: (name) => {
    return `query {
      formFieldConfigs(filters: { name: { eq: "${name}" } }) {
        data {
          attributes {
            name
            fieldConfig {
              id
              visibility
              defaultValue
              fieldName {
                data {
                  attributes {
                    name
                  }
                }
              }
              label
              placeholder
              __typename
            }
          }
        }
      }
    }
    `;
  },
  getDataConfigs: (name) => {
    return `query {
  dataConfigs(filters: { name: { eq: "${name}" } }) {
    data {
      attributes {
        name
        dataNationalities {
          data {
            attributes {
              name
              term
              value
            }
          }
        }
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
                  }
                }
              }
            }
          }
        }
        dataProductNames {
          data {
            attributes {
              name
              label
              code
              productId
            }
          }
        }
        dataPremiumType {
          data {
            attributes {
              name
              label
              value
            }
          }
        }
        dataPremiumPaymentTerms {
          data {
            attributes {
              name
              label
              value
            }
          }
        }
        dataCountries {
          data {
            attributes {
              name
              shortName
              code
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
