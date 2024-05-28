
import DefaultAppLayout from './DefaultAppLayout';
import AxisAppLayout from './AxisAppLayout';
import DefaultMainLayout from './DefaultMainLayout';



export const AppLayout = ({
    themeConfig,
    utmConfig,
}) => {


    const layoutMappings = {
        DefaultAppLayout: DefaultAppLayout,
        AxisAppLayout: AxisAppLayout,
    };
    const Layout = layoutMappings[utmConfig?.themeConfig?.layout?.layoutType?.name] || DefaultAppLayout;

    return Layout ? (
        <Layout
            themeConfig={themeConfig}
            utmConfig={utmConfig}
        >
            <DefaultMainLayout>
                {/* <Journey page={page} utmConfig={utmConfig} appConfig={appConfig} /> */}
            </DefaultMainLayout>
        </Layout>
    ) : (
        <h2>Page not found</h2>
    );

};



