'use client'
import Page from "../Pages/Pages";
import { utmService } from "@/app/services/utmService";
import { useEffect, useState } from "react";
const Journey = ({
  themeConfig,
  utmConfig,
  slug
  // pageType,
  // pages
}) => {

  const [page, setPage] = useState(null);

  const getPageData = async () => {
    const pageData = await utmService.getpage(utmConfig, slug);
    setPage(pageData?.[0]);
  }

  useEffect(() => {
    getPageData();
  }, [])



  return (
    <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
      {
        page &&
        <Page
          utmConfig={utmConfig}
          themeConfig={themeConfig}
          page={page}
        />
      }
    </div>
  )
}

export default Journey
