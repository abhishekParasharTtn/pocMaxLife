import DateInput from "./element/DateInput/DateInput";
import Button from "./element/Button/Button";
import Input from "./element/Input/Input";
import RadioButtonField from "./element/Radio/radio";
const Component = ({

  themeConfig,
  utmConfig,
  page,
  key,
  label,
  type,
  placeholder,
  name,
  dataFilter,
  style,
  title
  
}) => {
  const componentMapping = () => {
     
        switch (name) {
          case 'firstName':
          case 'lastName':
              return (
                  <Input
                    
                      fieldName={name}
                      label={label}
                  />
              );
          case 'gender':
              return (
                  <RadioButtonField
                     
                      fieldName={name}
                      label={label}
                      option={dataFilter}
                  />
              );
          case 'dob':
          return (
              <DateInput
               
                  fieldName={name}
                  label={label}
              />
          );
          case 'save':
          return (
              <Button
                  type={type}
                  label={label}
              />
          );
          case 'proceed':
          return (
              <Button
               
                  type={type}
                  label={label}
              />
          );
          default:
              return null;
      }

  }
  


  return (
    <>
    <div className="flex justify-center">
    <div className="grid grid-cols-2 gap-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
     {componentMapping()}
      </div>
      </div>
      </>
  )
}

export default Component;