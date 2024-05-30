import Form from "../Form.js/Form";
const Section = ({

  themeConfig,
  utmConfig,
  page,
  sectionData
}) => {
  


  return (
    <div className="Section-layout">
      <div className={'text-primary'}>{sectionData.name}</div>
     <Form page={page} utmConfig={utmConfig} formData={sectionData}></Form>
    </div>
  )
}

export default Section;