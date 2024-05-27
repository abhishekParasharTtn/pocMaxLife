
import DefaultAppLayout from './DefaultAppLayout';
import AxisAppLayout from './AxisAppLayout';
import DefaultMainLayout from './defaultMainLayout';


export const appLayout = ({
    appConfig,
    // showNavigation,
    // groupType,
    // page,
    utmConfig,
}) => {

    console.log('loko');
    // console.log('appconfig',appConfig);
    console.log('utmConfig',utmConfig?.themeConfig?.layout?.layoutType?.name);
    const layoutMappings = {
        DefaultAppLayout: DefaultAppLayout,
        AxisAppLayout: AxisAppLayout,
    };
    const Layout = layoutMappings[utmConfig?.themeConfig?.layout?.layoutType?.name] || DefaultAppLayout;

    return Layout ? (
        <Layout
            appConfig={appConfig}
            showNavigation={showNavigation}
            groupType={groupType}
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



