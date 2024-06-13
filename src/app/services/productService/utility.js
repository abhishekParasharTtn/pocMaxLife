//const extClasses = require('./DynamicProductDetail.css');


import _ from 'lodash';
import productsData from './productJson.js';

const INVALID_VALUE_ARRAY = ['Invalid operation format', 'Variable value or type issue', 'Invalid operation format', 'Invalid Value'];

export const functionMap = {
  calculateRange(args) {
    var [start, end, max] = args;
    let array = [];
    let arrayRange;
    if (Math.sign(end) === -1 || INVALID_VALUE_ARRAY.includes(start) || INVALID_VALUE_ARRAY.includes(end)) {
      array = ['Invalid Value'];
      return array;
    }
    if (max) {
      end = end > max ? max : end;
    }
    arrayRange = (end + 1) - start;
    if (Math.sign(arrayRange) === -1) {
      array = ['Invalid Value'];
    } else {
      array = new Array(arrayRange).fill(undefined).map((_, i) => i + start);
    }
    return array;
  },

  dynamicValidator(...args) {
    const fieldName = args[3];
    const value = args[0];
    const allFields = [];
    productsData.SSP.forEach((item) => (item.sections.forEach((section) => (section.fields.forEach((field) => {
      allFields.push(field);
    })
    ))
    ));
    const field = allFields.filter((currentData) => {
      if (currentData.fieldType === 'Radio') {
        return currentData.values[0].name === fieldName;
      }
      return currentData.fieldName === fieldName;
    })[0];
    const validations = field ? field.validations : undefined;
    let error;
    if (validations && validations !== 'NA') {
      Object.keys(validations).forEach((rule) => {
        switch (rule) {
          case 'required':
            if (validations.required && !value) {
              error = 'Required';
            }
            break;
          case 'minLength':
            if (value && value.length < validations.minLength) {
              error = `Minimum length is ${validations.minLength}`;
            }
            break;
          case 'maxLength':
            if (value && value.length > validations.maxLength) {
              error = `Maximum length is ${validations.maxLength}`;
            }
            break;
          case 'minValue':
            if (value && parseInt(value) < validations.minValue) {
              error = `Minimum value required is ${validations.minValue}`;
            }
            break;
          default:
            error = undefined;
        }
      });
    }
    return error;
  },

  calculateDifference([firstArg, secondArg]) {
    return firstArg - secondArg;
  },

  exactValueReturn(paramArray) {
    return paramArray;
  },

  evaluateParams([...paramsArray], formData) {
    for (var i = 0; i < paramsArray.length; i++) {
      if (typeof paramsArray[i] === 'string' && paramsArray[i].includes('-')) {
        var operation = paramsArray[i].split('-');
        if (operation.length === 3) {
          var operator = operation[1];
          var varName1 = operation[0];
          var varName2 = operation[2];

          var value1 = varName1;
          var value2 = varName2;
          if (Number.isNaN(parseFloat(varName1))) {
            if (formData && formData[varName1] != undefined) {
              value1 = parseInt(formData[varName1]);
            } else {
              value1 = 0;
            }
          }
          if (Number.isNaN(parseFloat(varName2))) {
            if (formData && formData[varName2] != undefined) {
              value2 = parseInt(formData[varName2]);
            } else {
              value2 = 0;
            }
          }
          value1 = parseInt(value1);
          value2 = parseInt(value2);
          if (value1 !== undefined && value2 !== undefined && !Number.isNaN(value1) && !Number.isNaN(value2)) {
            switch (operator) {
              case 'add':
                paramsArray[i] = value1 + value2;
                break;
              case 'subtract':
                paramsArray[i] = value1 - value2;
                if (Math.sign(paramsArray[i]) === -1) {
                  paramsArray[i] = 'Invalid Value';
                }
                break;
              case 'multiply':
                paramsArray[i] = value1 * value2;
                break;
              case 'divide':
                paramsArray[i] = value1 / value2;
                break;
              default:
                paramsArray[i] = 'Invalid operation';
                break;
            }
          } else {
            paramsArray[i] = 'Variable value or type issue';
          }
        } else {
          paramsArray[i] = 'Invalid operation format';
        }
      } else if (typeof paramsArray[i] === 'string') {
        if (Number.isNaN(parseFloat(paramsArray[i]))) {
          if (formData && formData[paramsArray[i]] != undefined) {
            paramsArray[i] = parseInt(formData[paramsArray[i]]);
          } else {
            paramsArray[i] = 0;
          }
        }
      }
    }
    return paramsArray;
  },

  createFunctionFromString(element, formData) {
    if (element.logicFunctionName) {
      const calculateFunction = functionMap[element.logicFunctionName];
      if (element.logicFunctionParameter) {
        const params = functionMap.evaluateParams(element.logicFunctionParameter, formData);

        return calculateFunction(params);
      }
    }
  },

  generateRanges(field, formData) {
    if (!field.parentValues[formData[field.parent]]) return;
   
    let data = ((field.parentValues[formData[field.parent]].values.map((element) => {
      if (element.logic) {
        const range = functionMap.createFunctionFromString(element, formData);
        return (range.map((item) => ({
          value: item,
          label: item,
        })));
      }
      return (
        {
          value: element.value,
          label: element.value,
        });
    })));
    let finalData = data.length && data[0][0] ? data[0] : data;
    return finalData;
  },

  getStyles(element, classes, formData) {
    let arr = classes.map((item) => extClasses[item]);
    let internalClassArr = [];
    if (formData && formData[element.name] && element.selectedClass && element.notSelectedClass) {
      if (formData[element.name] === element.key) {
        internalClassArr = element.selectedClass.map((item) => extClasses[item]);
      } else {
        internalClassArr = element.notSelectedClass.map((item) => extClasses[item]);
      }
    }
    let finalArr = [...arr, ...internalClassArr];
    return finalArr.join(' ');
  },

  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  },

  // getIcon(element, formData) {
  //   const images = functionMap.importAll(require.context('./assets', false, /\.(svg)$/));
  //   if (formData && formData[element.name] && formData[element.name] === element.key) {
  //     return images[element.selectedIcon];
  //   }
  //   return images[element.nonSelectedIcon];
  // },

  evaluateOperation(key, operation, value, formData) {
    if (!formData) return;
    switch (operation) {
      case 'EQUALS':
        return formData[key] === value;
      case 'NOTEQUALS':
        return formData[key] !== value;
      case 'AND':
        return key && value;
      case 'OR':
        return key || value;
      case 'EQUALSIN':
        const valueArray = value.split(',');
        return valueArray.includes(formData[key]);
      case 'GREATERTHANEQUALS':
        return formData[key] >= value;
      default:
        return false;
    }
  },

  renderCondition(conditions, formData) {
    let { nextOperation } = conditions[0];
    let overallCondition = null;
    conditions.forEach((element) => {
      if (element.conditions) {
        const nestedCondition = functionMap.renderCondition(element.conditions, formData);
        if (nextOperation) {
          overallCondition = functionMap.evaluateOperation(overallCondition, nextOperation, nestedCondition, formData);
          return overallCondition;
        }
        overallCondition = nestedCondition;
        return overallCondition;
      }
      const { key, operation, value } = element;
      const presentCondition = functionMap.evaluateOperation(key, operation, value, formData);
      if (overallCondition === null) {
        overallCondition = presentCondition;
      }
      if (nextOperation) {
        overallCondition = functionMap.evaluateOperation(overallCondition, nextOperation, presentCondition, formData);
      }
      nextOperation = element.nextOperation;
    });
    return overallCondition;
  },
};