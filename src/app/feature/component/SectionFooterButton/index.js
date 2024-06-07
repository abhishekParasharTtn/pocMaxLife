import dynamic from "next/dynamic";
const buttonComponent = dynamic(() =>
  import('../element/Button/Button')
);


const ButtonGroup = ({
  button
}) => {

  // const { name, link, label, type, __typename } = button;
  const buttonComponentMapping = {
    ComponentUiButton: buttonComponent
  }

  // console.log(button, "::button")
  const Button = buttonComponentMapping[button?.__typename];
  return (
    <>
      {Button ?
        <Button
          component={button}
        /> :
        null
      }
    </>
  )
};

export default ButtonGroup;
