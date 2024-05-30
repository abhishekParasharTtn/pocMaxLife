import Component from "../component/Component"
const Form = ({

  themeConfig,
  utmConfig,
  page,
  formData
}) => {
  

  const formComponents = () => {
    return formData.form.components.map((component, index) => (
      
      <Component
        key={index}
        label={component.label || component.title || null}
        type={component.type || component.componentType || null}
        placeholder={component.placeholder || null}
        name={component.fieldName ? component.fieldName.name : null}
        dataFilter={component.dataFilter || []}
        style={component.style || null}
        title={component.title || null}
      />
    ));
  };

  return (
    <div className="Form-layout">
      {formComponents()}
     
    </div>
  )
}

export default Form