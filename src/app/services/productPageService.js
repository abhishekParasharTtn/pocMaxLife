import {
  buildRuleCriteriaAndExecuteAll,
  processRulesWithRuleEngine,
} from "./jsonRuleUtil";
export const productPageService = {
  productFormRules: async function () {
    const productFormData = [
      {
        id: "1",
        relationBetweenAnyAll: "all",
        relationWithNextRule: "all",
        any: [],
        alls: [
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
        ruleOutput: [
          {
            id: 103,
            key: "disable",
            value: "false",
          },
        ],
      },
    ];

    const fact = {
      firstName: "true",
      lastName: "true",
      dob: "true",
      gender: "false",
    };

    const productDetailsVisibilityRule = await buildRuleCriteriaAndExecuteAll(
      productFormData || [],
      fact,
      "productDetails"
    );
    console.log("rulesOutput", productDetailsVisibilityRule);

    const dataRules = [
      {
        id: 239,
        relationBetweenAnyAll: "all",
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
    ];

    const fact2 = {
      userAge: 30,
      policyTerm: 50,
      plan: "SSPs",
      isTropVisible: "sdd",
    };

    const ruleOther = await buildRuleCriteriaAndExecuteAll(
      dataRules || [],
      fact2,
      "productDetails"
    );
    console.log("rulesOutput 2", ruleOther);
    // return rulesOutput;
  },
};
