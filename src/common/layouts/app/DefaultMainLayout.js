const DefaultMainLayout = ({ children }) => {
    return (
      <>
        <main className="mainContainer flex-1">
          <div >{children}</div>
        </main>
      </>
    )
  }
  
  export default DefaultMainLayout