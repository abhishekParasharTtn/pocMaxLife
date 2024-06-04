import React from 'react'
import Section from '../Section/Section';
import FormLayout from '../Form.js/Form';
import { extractDetailsSection,extractRoute } from '@/app/services/util';


const CustomerDetailLayout = ({themeConfig,utmConfig,page}) => {
  const pageData = extractDetailsSection(page,"customerDetails")
  const pageRoute  = extractRoute(page,"customerDetails")

  const sectionHandler = () => {
    return ( pageData.components.map((data) => {
          // console.log(data,'data')

          return <Section
              themeConfig={themeConfig}
              utmConfig={utmConfig}
              page={data}
              pageRoute = {pageRoute}
          />
        })
    )

  };
  return (
    <FormLayout>
      <div className="grid grid-cols-2 bg-default px-8 py-6 w-2/4">
        <div className="text-center col-span-2">{pageData.title}</div>
        {sectionHandler()}
      </div>
      </FormLayout>
  )
}

export default CustomerDetailLayout