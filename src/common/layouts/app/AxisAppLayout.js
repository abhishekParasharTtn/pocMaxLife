
import Theme from './Theme'
const axisAppLayout = ({
  children,
  themeConfig,
  
}) => {


  return (
    <div className="min-h-screen">
      <Theme themeConfig={themeConfig} />
      {children}
    </div>
  )
}

export default axisAppLayout
