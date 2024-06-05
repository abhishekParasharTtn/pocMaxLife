import { Engine } from "json-rules-engine";

const relations = {
  ANY: "any",
  ALL: "all",
};

const ruleMapper = (ruleItem) => {
  const getValue = (item) => {
    if (isNaN(item?.customValue)) {
      return item.customValue ? item.customValue : item.value;
    }
    return item.customValue ? +item.customValue : item.value;
  };
  let ruleItemValue = getValue(ruleItem);

  if (["in", "notIn"].includes(ruleItem.operator)) {
    if (ruleItem.values && ruleItem.values.length) {
      ruleItemValue = ruleItem.values.map((item) => {
        return getValue(item);
      });
    } else {
      ruleItemValue = [ruleItemValue];
    }
  }
  return {
    fact: ruleItem.fact.name,
    operator: ruleItem.operator,
    value: ruleItemValue,
  };
};

const createJsonRuleCriteria = (ruleObj) => {
  const jsonRuleCriteria = {
    conditions: {},
    event: {
      type: "output",
      params: {
        message: null,
      },
    },
  };
  const { rules, ruleOutput, relationBetweenAnyAll } = ruleObj;
  let outRules = rules.map((rule) => {
    let result;
    if (rule.any) {
      result = { any: rule.any.map(ruleMapper) };
    }
    if (rule.alls) {
      result = { all: rule.alls.map(ruleMapper) };
    }
    return result;
  });
  outRules = outRules.filter((rule) => rule);
  jsonRuleCriteria.conditions[relationBetweenAnyAll] = outRules;
  jsonRuleCriteria.event.params.message = ruleOutput;
  return jsonRuleCriteria;
};

const buildRuleCriteria = (rule) => {
  if (!rule) {
    return null;
  }
  const outRules = [{ any: rule.any }, { alls: rule.alls || rule.all }];
  const ruleOutput =
    rule.ruleOutput &&
    rule.ruleOutput.map((item) => ({ key: item.key, value: item.value }));
  const relationBetweenAnyAll = rule.relationBetweenAnyAll
    ? rule.relationBetweenAnyAll
    : relations.ALL;

  if (!outRules[0].any && !outRules[1].alls) {
    return null;
  }
  return createJsonRuleCriteria({
    rules: outRules,
    ruleOutput: ruleOutput,
    relationBetweenAnyAll: relationBetweenAnyAll,
  });
};

const executeRuleCriteria = async (criteria, facts) => {
  const engine = new Engine();
  if (!criteria || !Object.keys(facts).length) {
    return null;
  }
  engine.addRule(criteria);
  const result = await engine.run(facts);
  return result;
};

const buildRuleCriteriaAndExecuteAll = async (rules, facts, name) => {
  debugger;
  rules = rules || [];
  let finalResult = false;
  let finalOutput = [];
  const promises = [];
  const ruleRelations = [];
  const defaultRelation = relations.ANY;
  rules.forEach((rule) => {
    ruleRelations.push(rule.relationWithNextRule || defaultRelation);
    const ruleCriteria = buildRuleCriteria(rule);
    promises.push(executeRuleCriteria(ruleCriteria, facts));
  });
  let i = 1;
  const results = await Promise.all(promises);

  results.forEach((result) => {
    const ruleResult = result?.almanac?.events?.success?.length !== 0;
    const ruleOutput = ruleResult
      ? result?.almanac?.events?.success[0].params.message || []
      : [];
    if (i === 1) {
      finalResult = ruleResult;
    } else if (i <= ruleRelations.length) {
      finalResult =
        relations.ANY === ruleRelations[i - 2]
          ? finalResult || ruleResult
          : finalResult && ruleResult;
    }
    if (ruleResult) {
      finalOutput = [...finalOutput, ...ruleOutput];
    }
    i += 1;
  });
  return { finalResult, finalOutput, name };
};

const processAllRules = async (rules, facts, ruleName) => {
  const ruleList = Object.values(rules || {});
  const result = [];

  if (ruleList?.length) {
    ruleList.forEach((rule) => {
      result.push(
        buildRuleCriteriaAndExecuteAll(rule?.[ruleName], facts, rule)
      );
    });
  }

  return Promise.all(result);
};

const processRulesWithRuleEngine = async (rules, facts, ruleName) => {
  const result = await processAllRules(rules, facts, ruleName);
  return Promise.resolve(result?.filter((res) => res?.finalResult));
};

export default { buildRuleCriteriaAndExecuteAll, processRulesWithRuleEngine };
