'use client'
import {useEffect,useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import FieldComponent from "@/app/feature/fieldComponents/fieldComponent";
import { productService } from "@/app/services/productService/productService";
import { isEmpty } from "lodash";

function getAge(dateOfBirth) {
    // Create a Date object from the provided DOB
    const dob = new Date(dateOfBirth);

    // Get today's date
    const today = new Date();

    // Calculate the difference in milliseconds between today and DOB
    const ageDiffInMs = today.getTime() - dob.getTime();

    // Convert milliseconds to years (rounded down to whole years)
    const ageInYears = Math.floor(ageDiffInMs / (1000 * 60 * 60 * 24 * 365));

    // Return the calculated age
    return ageInYears;
}

const Component = ({
    themeConfig,
    utmConfig,
    form = {},
    formName,
    pageRoute,
    dataConfigs

}) => {
    const { form: { components } = {} } = form;
    const formData = useSelector((state) => state.forms.productDetails);
    const productName = formData?.productName || null 
    const premiumType = formData?.premiumType || null
    const premiumPaymentTerm = formData?.premiumPaymentTerm || null
    const policyTerm = formData?.policyTerm || null 
    const [data,setData] = useState(components);

    const  replaceData = (components, dataConfigs) => {
        const config = dataConfigs.dataConfigs[0];    
        components.forEach(component => {
            const dataSourceName = component.dataSourceName;
            if (dataSourceName && config.hasOwnProperty(dataSourceName) && !isEmpty(config[dataSourceName])) {
                component.data = config[dataSourceName];
            }
        });
        return components
    }

    const productDetail = async () => {
        const InsurerAge = formData?.dob && getAge(formData?.dob) || null;
        const _formData = { ...formData, InsurerAge, isPosSeller: 'Yes' }
        const payload = {
            key:'SSP',
            formData:_formData,
            components:components
        }
       
        try {
          const res = await fetch('http://localhost:3000/api/utms',{
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'content-type': 'application/json'
            }
          })
          const data = await res.json();
           if(!isEmpty(data) && !isEmpty(dataConfigs)) { 
            const dataMerged = replaceData(components,dataConfigs)
            setData(dataMerged);
           }
           else if (!isEmpty(data)) {
            setData(data);

           }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        if(formName === 'productDetails') productDetail();
       
      }, [productName,premiumType,premiumPaymentTerm,policyTerm]);
         
    return (
        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {
                data.length > 0 &&
                data.map((component) => {
                    return <FieldComponent
                        key={component?.name}
                        component={component}
                        formName={formName}
                        pageRoute={pageRoute}
                        utmConfig={utmConfig}
                        data ={data}
                    />
                })
            }
        </div>
    )
}

export default Component;