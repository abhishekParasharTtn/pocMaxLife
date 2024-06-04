import React, { Fragment } from 'react'
import Section from '../Section/Section';
import { extractDetailsSection } from '@/app/services/util';


const CustomerDetailLayout = ({ themeConfig, utmConfig, page }) => {
  // const pageData = extractDetailsSection(page,"customerDetails")
  console.log("page============>", page)
  const sectionHandler = (section) => {
    return <>
      {
        section?.form?.components?.length > 0
        && section.form.components.map((data) => {
          console.log(data, 'data')

          return <Section
            key={data?.name}
            themeConfig={themeConfig}
            utmConfig={utmConfig}
            page={data}
          />
        })
      }
    </>

  };
  return (
    <div className="grid grid-cols-2 bg-default px-8 py-6 w-2/4">
      {/* <div className="text-center col-span-2">{pageData.title}</div> */}
      {
        page?.sections?.length > 0 &&
        page.sections.map(section => {
          return <Fragment
            key={section?.name}
          >
            {
              sectionHandler(section)
            }
          </Fragment>
        })
      }
    </div>
  )
}

export default CustomerDetailLayout