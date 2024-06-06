'use client'
import { useEffect, useState } from "react";
import Page from "../Pages/Pages";
import { utmService } from "@/app/services/utmService";
import { productService } from "@/app/services/productService/productService";

const Journey = ({
  themeConfig,
  utmConfig,
  slug,
  fieldConfigData
  // pageType,
  // pages
}) => {

  const [page, setPage] = useState(null);

  const getPageData = async () => {
    let pageData = await utmService.getpage(utmConfig, slug);

    if (pageData && fieldConfigData) {
      pageData = utmService.getFormDataWithUpdatedDefaultValues(pageData, fieldConfigData);
    }
    setPage(pageData);
  }

  useEffect(() => {
    getPageData();
  }, [])

  useEffect(() => {
  }, [fieldConfigData])


  // const formData = {
  //       InsurerAge: 30,
  //       premiumType: 'Limited Pay',
  //       isPosSeller: 'Yes',
  //       premiumPaymentTerm: '13',
  //     }
  // const productComponent = productService.getProductComponent('SSP', formData)
  // console.log('productComponent', productComponent)

  return (
    <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
      {
        page &&
        <Page
          utmConfig={utmConfig}
          themeConfig={themeConfig}
          page={page?.[0]}
        />
      }
    </div>
  )
}

export default Journey
