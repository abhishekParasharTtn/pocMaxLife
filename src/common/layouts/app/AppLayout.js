import DefaultAppLayout from './DefaultAppLayout';
import AxisAppLayout from './AxisAppLayout';
import DefaultMainLayout from './DefaultMainLayout';
import Journey from '@/app/feature/Journey/Journey';



export const AppLayout = ({
    themeConfig,
    utmConfig,
    pageType,
    pages,
    slug,
    fieldConfigData
}) => {
    console.log(pages, 'from appLayout')
    const layoutMappings = {
        default: DefaultAppLayout,
        axis: AxisAppLayout,
    };
    const Layout = layoutMappings[utmConfig?.themeConfig?.name] || DefaultAppLayout;

    return Layout ? (
        <Layout
            themeConfig={themeConfig}
            utmConfig={utmConfig}
        >
            <DefaultMainLayout>
                <Journey
                    utmConfig={utmConfig}
                    themeConfig={themeConfig}
                    pageType={pageType}
                    pages={pages}
                    slug={slug}
                    fieldConfigData={fieldConfigData}
                />
            </DefaultMainLayout>
        </Layout>
    ) : (
        <h2>Page not found</h2>
    );

};



