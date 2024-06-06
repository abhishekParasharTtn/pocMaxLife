import React from 'react'
import Section from '../Section/Section';
import { extractDetailsSection, extractRoute } from '@/app/services/util';


const CustomerDetailLayout = ({ themeConfig, utmConfig, page,formName }) => {


  const sectionHandler = () => {
    return (page?.sections.map((section) => {
      return <Section
        themeConfig={themeConfig}
        utmConfig={utmConfig}
        section={section}
        page={page}
        formName={formName}
      />
    })
    )
  }
  return (
    <div className=" bg-default px-8 py-6 w-2/4">
      {/*<div className="text-center col-span-2">{pageData.title}</div>*/}
      {sectionHandler()}
    </div>
  )
}

export default CustomerDetailLayout