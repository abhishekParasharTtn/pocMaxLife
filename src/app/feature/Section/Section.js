import Form from "../Form.js/Form";
const Section = ({

  themeConfig,
  utmConfig,
  page
}) => {
  
  console.log('sectionPages',page);

  return (
    <div className="Section-layout">
      <div className={'text-primary'}>section</div>
     <Form page={page} utmConfig={utmConfig}></Form>
    </div>
  )
}

export default Section;