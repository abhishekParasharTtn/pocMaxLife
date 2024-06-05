import dynamic from "next/dynamic";
const buttonComponent = dynamic(() =>
  import('../element/Button/Button')
);


const ButtonGroup = ({
  button
}) => {

  const { name, link, label, type, __typename } = button;
  const buttonComponentMapping = {
    ComponentUiButton: buttonComponent
  }

  console.log(button, "::button")
  const Button = buttonComponentMapping[button?.__typename];
  return (
    <>
      {Button ?
        <Button
          type={type}
          label={label}
          name={name}
          pageRoute={link}
        /> :
        null
      }
    </>
  )
};

export default ButtonGroup;
