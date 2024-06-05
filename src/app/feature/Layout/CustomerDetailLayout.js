import React from 'react'
import Section from '../Section/Section';
import { extractDetailsSection,extractRoute } from '@/app/services/util';


const CustomerDetailLayout = ({themeConfig,utmConfig,pages}) => {
  // const pageData = extractDetailsSection(page,"customerDetails")
  // const pageRoute  = extractRoute(page,"customerDetails")

    const sectionHandler = () => {
        return ( pages?.[0]?.sections.map((section) => {
                return <Section
                    themeConfig={themeConfig}
                    utmConfig={utmConfig}
                    section={section}
                    pages={pages}
                />
            })
        )
    }
  return (
      <div className="grid grid-cols-2 bg-default px-8 py-6 w-2/4">
        {/*<div className="text-center col-span-2">{pageData.title}</div>*/}
        {sectionHandler()}
      </div>
  )
}

export default CustomerDetailLayout