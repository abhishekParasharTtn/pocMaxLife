import Section from "../Section/Section";
import dynamic from 'next/dynamic';
const Pages = ({
    themeConfig,
    utmConfig,
    pages,
  }) => {

  const CustomerDetailLayout = dynamic(() =>
      import('../Layout/CustomerDetailLayout')
  );
  const PersonalDetailLayout = dynamic(() =>
      import('../Layout/PersonalDetailLayout')
  );

    const layoutMappings = {
        CustomerDetailsPageLayout:CustomerDetailLayout,
        PersonalDetailsPageLayout:PersonalDetailLayout
  };
  const Layout = layoutMappings[pages?.[0]?.layout?.layout?.name] || null;
    console.log(Layout)

  return Layout ? (
    <Layout
    themeConfig = {themeConfig}
    utmConfig = {utmConfig}
    pages ={pages}
    />
) : (
    <h2>Page Layout is not defined...</h2>
);
  }
  
  export default Pages
  