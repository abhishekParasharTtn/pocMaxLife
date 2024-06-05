import { buildRuleCriteriaAndExecuteAll } from "./jsonRuleUtil";
export const productPageService = {
  productFormRules: function () {
    const productFormData = {
      id: "2",
      name: "productDetails",
      rules: {
        id: "1",
        any: [],
        all: [
          {
            fact: {
              name: "firstName",
            },
            operator: "equal",
            customValue: "true",
            value: null,
            values: [],
          },
          {
            fact: {
              name: "lastName",
            },
            operator: "equal",
            customValue: "true",
            value: null,
            values: [],
          },
          {
            fact: {
              name: "dob",
            },
            operator: "equal",
            customValue: "true",
            value: null,
            values: [],
          },
          {
            fact: {
              name: "gender",
            },
            operator: "equal",
            customValue: "true",
            value: null,
            values: [],
          },
        ],
        roleOutput: {
          value: null,
          isVisible: true,
          isDisable: false,
          key: null,
        },
      },
    };
    const fact = {
      firstName: "abhishek",
      lastName: "parashar",
      dob: "27/04/1994",
      gender: "male",
    };
    console.log(productFormData.rules);
    const rulesOutput = buildRuleCriteriaAndExecuteAll(
      productFormData.rules || [],
      fact,
      productFormData.name
    );
    // return rulesOutput;
  },
};
