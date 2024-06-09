import dynamic from "next/dynamic";
const buttonComponent = dynamic(() =>
  import('../element/Button/Button')
);


const ButtonGroup = ({ button, component, pageRoute, formName}) => {

  const {  __typename } = (button || component);

  const buttonComponentMapping = {
    ComponentUiButton: buttonComponent
  }

  const Button = buttonComponentMapping[button?.__typename || component?.__typename];
  return (
    <>
      {Button ?
        <Button
         button={button}
         component={component}
         pageRoute={pageRoute}
         formName={formName}
        /> :
        null
      }
    </>
  )
};

export default ButtonGroup;
