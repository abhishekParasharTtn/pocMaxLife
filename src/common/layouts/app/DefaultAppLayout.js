import Theme from './Theme'
const DefaultAppLayout = ({
  children,
  themeConfig,
  utmConfig
}) => {
  
   

  return (
    <div className="default-app-layout">
      <Theme themeConfig={themeConfig} />
      {/* <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon"  />
      </head> */}
      <div className={'text-primary'}>poc max life</div>
      {children}
    </div>
  )
}

export default DefaultAppLayout
