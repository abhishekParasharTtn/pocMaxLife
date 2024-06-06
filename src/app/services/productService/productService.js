import productsData from './productJson.js';
import * as utility from './utility.js';
import util from 'util';

const formData = {
        InsurerAge: 30,
        premiumType: 'Limited Pay',
        isPosSeller: 'Yes',
        premiumPaymentTerm: '13',
      }




const fieldHandler = (field, formData) => {
    switch (field.fieldType) {
        case 'Dropdown':
            field.values = field.parent && formData && formData[field.parent] != undefined ? utility.functionMap.generateRanges(field, formData) : field.values ? (field.values.map((element) => {
                if (element.logic) {
                    const range = utility.functionMap.createFunctionFromString(element, formData);
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
            })) : [];
            break;
            case 'Text':
                break;
            case 'Radio':
                break;
            case 'Calender':
                break;
            default:
                return ''

    }
    if (field.defaultRender === 'No') {
        field.renderCondition = utility.functionMap.renderCondition(field.renderCondition.conditions, formData);
    }
    delete field.parentValues;
    return {[field.fieldName]: {...field}};
}

  
export const productService = {
    getProductComponent:(product, formData)=>{
        let productJson = productsData[product];
        let fields = [];
        productJson.sections.forEach((section) => {
            section.fields.forEach((field) => {
                fields.push(fieldHandler(field, formData));
            })
        });
        return fields;
    }
}

// const componentLogic = returnAllFields(productsData.SSP, formData);
// console.log(util.inspect(componentLogic, null, 10));