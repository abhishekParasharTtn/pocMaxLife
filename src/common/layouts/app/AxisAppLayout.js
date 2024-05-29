
import Theme from './Theme'
const axisAppLayout = ({
  children,
  themeConfig,
  
}) => {
  

  return (
    <div className="axis-app-layout">
      <Theme themeConfig={themeConfig} />
     <div>Axis App poc</div>
      {children}

    
    </div>
  )
}

export default axisAppLayout
