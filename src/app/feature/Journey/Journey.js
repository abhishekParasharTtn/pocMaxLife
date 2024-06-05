'use client'
import Pages from "../Pages/Pages";
import {utmService} from "@/app/services/utmService";
import {useEffect, useState} from "react";
const Journey = ({
  themeConfig,
  utmConfig,
  pageType,
  pages
}) => {

  return (
    <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
      <Pages utmConfig={utmConfig} themeConfig={themeConfig} pages={pages} ></Pages>
    </div>
  )
}

export default Journey
