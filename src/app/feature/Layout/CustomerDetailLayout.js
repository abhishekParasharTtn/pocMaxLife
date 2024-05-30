import React from 'react'
import Section from '../Section/Section';
import { extractDetailsSection } from '@/app/services/util';


const CustomerDetailLayout = ({themeConfig,utmConfig,page}) => {
  const pageData = extractDetailsSection(page,"customerDetails")
  
  return (
    <Section
      themeConfig={themeConfig}
      utmConfig={utmConfig}
      page = {pageData}
    />
  )
}

export default CustomerDetailLayout