import Component from "../component/Component"

  const FormLayout = ({ children }) => {
    return (
      <>
      <form>
        <div  class="flex justify-center">{children}</div>
        </form>
      </>)
}

export default FormLayout