"use client"
import { useEffect, useState } from "react";
import Pages from "../Pages/Pages";
import { utmService } from "@/app/services/utmService";
const Journey = (props) => {
const {

  themeConfig,
  utmConfig,
  page,
  pageType,
  // route
} = props;

  const [clientPages, setClientPages] = useState();

  const myFunction = async () => {
     const _clientPages = await utmService.getPage("customerDetails",1111);
     console.log(props)
     debugger
     setClientPages(_clientPages?.[0])
    };
    
    useEffect(() => {
      myFunction();
    },[]); 

    console.log("===============>", page)

  return (
    <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
      <Pages page={clientPages} utmConfig={utmConfig} themeConfig={themeConfig} pageType={pageType}></Pages>
    </div>
  )
}

export default Journey
