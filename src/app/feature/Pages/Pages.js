import Section from "../Section/Section";
import dynamic from 'next/dynamic';
const Pages = ({
  themeConfig,
  utmConfig,
  page,
}) => {
  

  
  const CustomerDetailLayout = dynamic(() =>
    import('../Layout/CustomerDetailLayout')
  );
  const PersonalDetailLayout = dynamic(() =>
    import('../Layout/PersonalDetailLayout')
  );

  const layoutMappings = {
    CustomerDetailsPageLayout: CustomerDetailLayout,
    PersonalDetailsPageLayout: PersonalDetailLayout
  };
  const Layout = layoutMappings[page?.layout?.layout?.name] || null;
  
  return Layout ? (
    <Layout
      themeConfig={themeConfig}
      utmConfig={utmConfig}
      page={page}
      formName={page.name || ""}
    />
  ) : (
    <h2>Page Layout is not defined...</h2>
  );
}

export default Pages
