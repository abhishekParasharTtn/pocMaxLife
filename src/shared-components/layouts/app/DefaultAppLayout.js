
import Theme from "./Theme"

const defaultAppLayout = ({
  children,
  appConfig = globalAppConfig,
  utmConfig
}) => {
  
    console.log('appconfig',appConfig,utmConfig);

  return (
    <div className="default-app-layout">
      {/* <Theme themeConfig={themeConfig} /> */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon"  />
      </Head>
    
      
      {children}

      <style jsx>
        {`
          .header {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 72.625rem;
            .payment {
              font-size: var(--size-font-xs);
              line-height: var(--line-height-xs);
              display: flex;
              align-items: center;
              text-transform: uppercase;
              img {
                margin-right: 0.75rem /* 12px */;
                width: 1.5rem;
              }
            }
          }
        `}
      </style>
    </div>
  )
}

export default defaultAppLayout
