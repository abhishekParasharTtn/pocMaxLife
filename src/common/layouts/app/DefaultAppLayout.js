import Theme from './Theme'
const DefaultAppLayout = ({
  children,
  themeConfig,
  utmConfig
}) => {
  
 

  return (
    <div className="min-h-screen">
      <Theme themeConfig={themeConfig} />

      <div className={'text-primary'}>default max life</div>
      {children}
    </div>
  )
}

export default DefaultAppLayout
