import DefaultAppLayout from "./DefaultAppLayout";
import AxisAppLayout from "./AxisAppLayout";
import DefaultMainLayout from "./DefaultMainLayout";
import Journey from "@/app/feature/Journey/Journey";
import Header from "@/app/feature/component/header/header";
import Footer from "@/app/feature/component/Footer/footer";

export const AppLayout = ({
  themeConfig,
  utmConfig,
  pageType,
  pages,
  slug,
  fieldConfigData,
  dataConfigs,
  pageData,
}) => {
  const layoutMappings = {
    default: DefaultAppLayout,
    axis: AxisAppLayout,
  };
  const Layout =
    layoutMappings[utmConfig?.themeConfig?.name] || DefaultAppLayout;
  const sectionObject = themeConfig?.themeConfigs[0]?.sections[0];

  return Layout ? (
    <Layout themeConfig={themeConfig} utmConfig={utmConfig}>
      <Header sectionObject={sectionObject} />
      <DefaultMainLayout>
        <Journey
          utmConfig={utmConfig}
          themeConfig={themeConfig}
          pageType={pageType}
          pages={pages}
          slug={slug}
          fieldConfigData={fieldConfigData}
          dataConfigs={dataConfigs}
          pageData={pageData}
        />
      </DefaultMainLayout>
      <Footer />
    </Layout>
  ) : (
    <h2>Page not found</h2>
  );
};
