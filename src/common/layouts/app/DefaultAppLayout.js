import Theme from './Theme'
const DefaultAppLayout = ({
  children,
  themeConfig,
  utmConfig
}) => {
  
 

  return (
    <div className="">
      <Theme themeConfig={themeConfig} />
      {children}
    </div>
  )
}

export default DefaultAppLayout
