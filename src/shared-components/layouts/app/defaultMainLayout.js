const DefaultMainLayout = ({ children }) => {
    return (
      <>
      
        <main className="mainContainer">
          <div className="flex flex-wrap">{children}</div>
        </main>
       
      </>
    )
  }
  
  export default DefaultMainLayout