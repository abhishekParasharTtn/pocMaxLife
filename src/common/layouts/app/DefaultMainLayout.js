const DefaultMainLayout = ({ children }) => {
  return (
    <>
      <main className="mainContainer relative">
        <div>{children}</div>
      </main>
    </>
  );
};

export default DefaultMainLayout;
