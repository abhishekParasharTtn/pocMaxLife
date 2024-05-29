const DefaultMainLayout = ({ children }) => {
  return (
    <>
      <main className="mainContainer">
        <div className="flex flex-wrap">{children}</div>
      </main>
      {/* <style jsx>{`
        .mainContainer {
          min-height: calc(100vh - 213px);
          align-items: center;
          justify-content: center;
        }
      `}</style> */}
    </>
  );
};

export default DefaultMainLayout;
