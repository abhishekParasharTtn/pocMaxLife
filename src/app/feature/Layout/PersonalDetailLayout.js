import React from 'react'
import Section from '../Section/Section';
import { extractDetailsSection,extractRoute } from '@/app/services/util';

const PersonalDetailLayout = ({themeConfig,utmConfig,pages}) => {

    // const pageData = extractDetailsSection(pages,"personalDetails")
    // const pageRoute  = extractRoute(pages,"personalDetails")

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
        <div className='bg-default px-8 pt-6 w-2/4'>
            <div>
                <div className={'grid grid-cols-2 gap-4'}> {sectionHandler()}</div>
            </div>
        </div>

    )
}

export default PersonalDetailLayout