import { ruleEngine, processRulesWithRuleEngine } from "./jsonRuleUtil";
export const productPageService = {
  productFormRules: async function (rules, facts, formName) {
    // console.log(rules, facts);
    const fact = {
      firstName: "true",
      lastName: "true",
      // dob: "true",
      gender: "true",
    };

    // console.log("rule engine:::::::::", rules, formName, facts)
    const productDetailsVisibilityRule = await ruleEngine(
      rules || [],
      facts,
      formName
    );
    // console.log(productDetailsVisibilityRule, "::productDetailsVisibilityRule");
    return productDetailsVisibilityRule;
  },
};
