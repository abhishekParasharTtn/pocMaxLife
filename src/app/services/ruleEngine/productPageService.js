import { ruleEngine, processRulesWithRuleEngine } from "./jsonRuleUtil";
export const productPageService = {
  productFormRules: async function (rules, facts, formName) {
    // console.log(rules, facts);
    const fact = {
      firstName: false,
      lastName: false,
      dob: false,
      gender: false,
    };

    console.log("rule engine:::::::::", rules, formName, facts)
    const productDetailsVisibilityRule = await ruleEngine(
      rules || [],
      facts,
      formName
    );
    console.log(productDetailsVisibilityRule, "::productDetailsVisibilityRule");
    return productDetailsVisibilityRule;
  },
};
