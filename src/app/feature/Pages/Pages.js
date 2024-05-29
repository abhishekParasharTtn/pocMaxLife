import Section from "../Section/Section";
const Pages = ({

    themeConfig,
    utmConfig,
    page
  }) => {
    
    console.log('page',page);
  
    return (
      <div className="page-layout">
        <div className={'text-primary'}>page</div>
        <Section page={page} utmConfig={utmConfig}></Section>
       
      </div>
    )
  }
  
  export default Pages
  