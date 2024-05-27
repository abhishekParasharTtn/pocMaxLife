

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

export default axisAppLayout
