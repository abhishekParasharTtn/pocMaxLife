import DefaultAppLayout from './DefaultAppLayout';
import AxisAppLayout from './AxisAppLayout';
import DefaultMainLayout from './DefaultMainLayout';
import Journey from '@/app/feature/Journey/Journey';
import Image from "next/image";
import Header from "@/app/feature/component/header/header";



export const AppLayout = ({
    themeConfig,
    utmConfig,
    pageType,
    pages,
    slug,
    fieldConfigData
}) => {

    const layoutMappings = {
        default: DefaultAppLayout,
        axis: AxisAppLayout,
    };
    const Layout = layoutMappings[utmConfig?.themeConfig?.name] || DefaultAppLayout;
    const sectionObject = themeConfig.themeConfigs[0].sections[0];

    console.log(sectionObject,'sectionObject');
    return Layout ? (
        <Layout
            themeConfig={themeConfig}
            utmConfig={utmConfig}
        >
           <Header sectionObject={sectionObject} />
            
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
            <footer className="max-w-full flex justify-center gap-5 text-primary text-lg items-center">
                <div><Image src="/footer.png" alt="max-logo" width={270} height={270}/></div>
                <div>© All rights reserved.</div>
            </footer>
        </Layout>
    ) : (
        <h2>Page not found</h2>
    );

};



