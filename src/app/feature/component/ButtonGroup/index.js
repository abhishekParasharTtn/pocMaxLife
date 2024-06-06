import dynamic from "next/dynamic";
const buttonComponent = dynamic(() =>
  import('../element/Button/Button')
);


const ButtonGroup = ({ button, component }) => {

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
        /> :
        null
      }
    </>
  )
};

export default ButtonGroup;