import Pages from "../Pages/Pages";
const Journey = ({

  themeConfig,
  utmConfig,
  page,
  pageType
}) => {


  return (
    <div className="Journey-layout">
      <div className={'text-primary'}>Journey</div>
      <Pages page={page} utmConfig={utmConfig} themeConfig={themeConfig} pageType={pageType}></Pages>
     
    </div>
  )
}

export default Journey
