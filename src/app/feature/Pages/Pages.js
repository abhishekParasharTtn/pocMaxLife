import Section from "../Section/Section";
const Pages = ({

    themeConfig,
    utmConfig,
    page
  }) => {
   
  
    return (
      <div className="page-layout">

      {page[0]?.sections?.map(section => (
        <div key={section?.name}>
          <Section page={page} utmConfig={utmConfig} sectionData={section} ></Section>
        </div>
      ))}
        
        
       
      </div>
    )
  }
  
  export default Pages
  