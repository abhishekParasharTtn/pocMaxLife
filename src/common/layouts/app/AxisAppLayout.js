
import Theme from './Theme'
const axisAppLayout = ({
  children,
  themeConfig,
  
}) => {
  

  return (
    <div className="min-h-screen">
      <Theme themeConfig={themeConfig} />
     <div>Axis App poc</div>
      {children}

    
    </div>
  )
}

export default axisAppLayout
