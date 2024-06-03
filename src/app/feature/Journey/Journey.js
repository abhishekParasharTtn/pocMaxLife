"use client"
import {  useEffect,useState } from "react";
import Pages from "../Pages/Pages";
import { utmService } from "../../services/utmService";

const Journey = ({

  themeConfig,
  utmConfig,
  page,
  pageType,
  route
}) => {
 
  const [clientPages, setClientPages] = useState();

  const myFunction = async () => {
     const _clientPages = await utmService.getPages(route.pageName,route.utmCode);
     setClientPages(_clientPages)
    };
    
    useEffect(() => {
      myFunction();
    },[]); 
    
    console.log('clientPages', clientPages);
  return (
    <div className="Journey-layout bg-light shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center">
      <h1>s</h1>
      <Pages page={clientPages} utmConfig={utmConfig} themeConfig={themeConfig} pageType={clientPages?.layout?.name}></Pages>
    </div>
  )
}

export default Journey
