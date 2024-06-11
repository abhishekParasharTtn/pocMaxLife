"use client"
import Theme from './Theme'

const style = {
  margin: "0",
  height: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column"
}
const DefaultAppLayout = ({
  children,
  themeConfig,
  utmConfig
}) => {
  
 
 
  return (
    <div style={style}>
      <Theme themeConfig={themeConfig} />
      {children}

    </div>
  )
}

export default DefaultAppLayout
