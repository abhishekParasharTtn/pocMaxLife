

const axisAppLayout = ({
  children,
  appConfig = globalAppConfig,
  groupType,
  utmConfig
}) => {
  


//   const appComponentLayout = position => {
//     const section = components[componentLayoutOrder[`${position}`]]
//     if (section?.fieldName?.name === "logo") {
//       const config = {
//         logo: {
//           src: section?.image?.url
//             ? section?.image?.url
//             : themeConfig?.logo.src,
//           size: {
//             width: appConfig?.themeConfig?.style?.logo?.width,
//             height: appConfig?.themeConfig?.style?.logo?.height
//           },
//           width: section?.image?.width,
//           height: section?.image?.height,
//           alt: section?.altText
//         },
//         routes: []
//       }
//       section.logo = config?.logo
//     }
//     return section ? <Section section={section} /> : null
//   }
  return (
    <div className="default-app-layout">
      <Theme themeConfig={themeConfig} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={`${publicPath}/favicon.ico`} />
      </Head>
      {children}

    
    </div>
  )
}

export default axisAppLayout
