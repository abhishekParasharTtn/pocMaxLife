import Section from "../Section/Section";
import dynamic from 'next/dynamic';
const Pages = ({

    themeConfig,
    utmConfig,
    page,
    pageType,
  }) => {

  const CustomerDetailLayout = dynamic(() =>
      import('../Layout/CustomerDetailLayout')
  );
  const PersonalDetailLayout = dynamic(() =>
      import('../Layout/PersonalDetailLayout')
  );
   
    const layoutMappings = {
      "customer-details":CustomerDetailLayout,
      "personal-details":PersonalDetailLayout
  };
  const Layout = layoutMappings[pageType] || null;
 
  return Layout ? (
    <Layout
    themeConfig = {themeConfig}
    utmConfig = {utmConfig}
    page ={page}
    
    />
) : (
    <h2>Page Layout is not defined...</h2>
);
  }
  
  export default Pages
  