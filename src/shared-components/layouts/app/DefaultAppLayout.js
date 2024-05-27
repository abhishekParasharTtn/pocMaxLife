import Theme from './Theme'
const defaultAppLayout = ({
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
      <div className="color-background-light">jdjjddjk</div>
      {children}
    </div>
  )
}

export default defaultAppLayout
