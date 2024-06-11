const DefaultMainLayout = ({ children }) => {
    return (
      <>
        <main className="mainContainer flex-1">
          <div className="h-full">{children}</div>
        </main>
      </>
    )
  }
  
  export default DefaultMainLayout