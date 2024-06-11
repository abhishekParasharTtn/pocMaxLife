
import Theme from './Theme';

const style = {
  margin: "0",
  height: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column"
}

const axisAppLayout = ({
  children,
  themeConfig,
  
}) => {


  return (
    <div className="min-h-screen" style={style}>
      <Theme themeConfig={themeConfig} />
      {children}
    </div>
  )
}

export default axisAppLayout
