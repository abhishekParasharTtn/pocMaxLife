import {
  buildRuleCriteriaAndExecuteAll,
  processRulesWithRuleEngine,
} from "./jsonRuleUtil";
export const productPageService = {
  productFormRules: async function () {
    const productFormData = [
      {
        id: "1",
        any: [],
        alls: [
          {
            fact: {
              data: {
                attributes: {
                  name: "firstName",
                },
              },
            },
            operator: "equal",
            customValue: "true",
            value: null,
            values: [],
          },
          {
            fact: {
              data: {
                attributes: {
                  name: "lastName",
                },
              },
            },
            operator: "equal",
            customValue: "true",
            value: null,
            values: [],
          },
          {
            fact: {
              data: {
                attributes: {
                  name: "dob",
                },
              },
            },
            operator: "equal",
            customValue: "true",
            value: null,
            values: [],
          },
          {
            fact: {
              data: {
                attributes: {
                  name: "gender",
                },
              },
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
    ];

    const dataRules = [
      {
        id: 239,
        relationBetweenAnyAll: "any",
        relationWithNextRule: "all",
        any: [],
        alls: [
          {
            id: 862,
            fact: {
              id: 25,
              name: "userAge",
            },
            operator: "greaterThanInclusive",
            customValue: "18",
            value: null,
            values: [],
          },
          {
            id: 861,
            fact: {
              id: 25,
              name: "userAge",
            },
            operator: "lessThanInclusive",
            customValue: "45",
            value: null,
            values: [],
          },
          {
            id: 863,
            fact: {
              id: 26,
              name: "policyTerm",
            },
            operator: "greaterThanInclusive",
            customValue: "40",
            value: null,
            values: [],
          },
          {
            id: 905,
            fact: {
              id: 29,
              name: "plan",
            },
            operator: "equal",
            customValue: null,
            value: "SSP",
            values: [],
          },
        ],
        ruleOutput: [
          {
            id: 103,
            key: "disable",
            value: "false",
          },
        ],
      },
      {
        id: 254,
        relationBetweenAnyAll: "any",
        relationWithNextRule: "all",
        any: [],
        alls: [
          {
            id: 907,
            fact: {
              id: 29,
              name: "plan",
            },
            operator: "equal",
            customValue: null,
            value: "SSP",
            values: [],
          },
          {
            id: 908,
            fact: {
              id: 25,
              name: "userAge",
            },
            operator: "lessThanInclusive",
            customValue: "45",
            value: null,
            values: [],
          },
          {
            id: 2306,
            fact: {
              id: 75,
              name: "isTropVisible",
            },
            operator: "notEqual",
            customValue: "true",
            value: null,
            values: [],
          },
        ],
        ruleOutput: [
          {
            id: 108,
            key: "visibility",
            value: "true",
          },
        ],
      },
    ];

    const fact = {
      firstName: "true",
      lastName: "true",
      dob: "true",
      gender: null,
    };
    const fact2 = {
      userAge: 20,
      policyTerm: 1,
      plan: "SSP",
      isTropVisible: "dd",
    };

    const rulesOutput = await buildRuleCriteriaAndExecuteAll(
      productFormData || [],
      fact,
      "productDetails"
    );
    console.log("rulesOutput", rulesOutput);
    // return rulesOutput;
  },
};
