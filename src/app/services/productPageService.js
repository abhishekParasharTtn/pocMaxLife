import { ruleEngine, processRulesWithRuleEngine } from "./jsonRuleUtil";
export const productPageService = {
  productFormRules: async function (rules) {
    console.log(rules);

    const fact = {
      firstName: "true",
      lastName: "true",
      dob: "true",
      gender: "true",
    };

    const productDetailsVisibilityRule = await ruleEngine(
      rules || [],
      fact,
      "productDetails"
    );
    console.log(productDetailsVisibilityRule, "::productDetailsVisibilityRule");
    return productDetailsVisibilityRule;
  },
};
