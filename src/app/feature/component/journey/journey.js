'use client'
import PageComponent from "@/app/feature/component/pageComponent/pageComponent";

const Journey = (props) => {
    const {utmConfig = {}, themeConfig= {}} = props;
    return (
        <div className='journey-container'>
            <PageComponent utmConfig={utmConfig} themeConfig={themeConfig}/>
            <style jsx>{`
                .journey-container {
                    
                }
            `}</style>
        </div>
    );
};

export default Journey;