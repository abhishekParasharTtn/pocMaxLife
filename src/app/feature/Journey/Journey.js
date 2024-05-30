import Pages from "../Pages/Pages";
const Journey = ({

  themeConfig,
  utmConfig,
  page,
  pageType
}) => {


  return (
    <div className="Journey-layout bg-light">
      <Pages page={page} utmConfig={utmConfig} themeConfig={themeConfig} pageType={pageType}></Pages>
    </div>
  )
}

export default Journey
