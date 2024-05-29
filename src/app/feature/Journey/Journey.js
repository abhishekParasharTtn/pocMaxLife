import Pages from "../Pages/Pages";
const Journey = ({

  themeConfig,
  utmConfig,
  page
}) => {
  


  return (
    <div className="Journey-layout">
      <div className={'text-primary'}>Journey</div>
      <Pages page={page} utmConfig={utmConfig}></Pages>
     
    </div>
  )
}

export default Journey
