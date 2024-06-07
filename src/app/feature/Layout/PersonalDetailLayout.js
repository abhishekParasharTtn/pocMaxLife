import React from 'react'
import Section from '../Section/Section';
import { extractDetailsSection, extractRoute } from '@/app/services/util';

const PersonalDetailLayout = ({ themeConfig, utmConfig, page,formName }) => {

    const pageRoute = {
        prev: page?.previous,
        next: page?.next
      }

  const sectionHandler = () => {
    return <>
      {page?.sections?.length > 0
        && page.sections.map((section, index) => {
          return <Section
            key={index}
            themeConfig={themeConfig}
            utmConfig={utmConfig}
            section={section}
            formName={formName}
            pageRoute={pageRoute}
          // page={page}
          />
        })
      }
    </>
  }

  return (
    <div className='bg-default px-8 pt-6 w-2/4'>
      <div className={''}> {sectionHandler()}</div>
    </div>

  )
}

export default PersonalDetailLayout