import { transformer } from "@/utils/transformer";
import { api } from "@/utils/api";

export const utmService = {
    getUtmDetails: async function (slug) {
        const utmCode = slug[0];
        const utmDetails = await api.get(`/api/utm-configs?filter[utmCode]=${utmCode}&populate=*`);
        return transformer.removeDataAttributes(utmDetails)
    },
    getThemeConfig: async function (utmDetails) {
        
        // data.getThemeConfig.name
        // http://localhost:1338/api/theme-configs?filter[utmCode]=default&populate=*
        // const themeId = utmDetails?.data[0]?.attributes?.theme?.data?.id;
        // const themeConfig = await api.get(`/api/theme-configs/${themeId}`);
        // return themeConfig;

        //fetch data from graphql 


        return {
            "id": 1,
                "name": "default",
                "layout":"DefaultAppLayout",
                "style": {
                    "colors": {
                    "text-link-secondary": "#3597ec",
                    "border-primary": "#f27930",
                    "background-default-dark": "#f7f8f9",
                    "default": "#fff",
                    "background-default": "#fff",
                    "text-primary": "#171a21",
                    "primary": "#f27930",
                    "background-primary": "#f27930",
                    "text-success": "#099A4F",
                    "grey-dark": "#707070",
                    "background-success": "#E6F2FD",
                    "background-active": "#e6f2fd",
                    "active": "#3597ec",
                    "shadow-secondary": "#171A210F",
                    "border-error": "#d7322d",
                    "text-error": "#d62f25",
                    "text-disable": "#8973ab",
                    "placeholder-primary": "#c2c7d1",
                    "inactive": "#c2c7d1",
                    "text-link-primary": "#f27930",
                    "border-secondary": "#3b99e9",
                    "highlight": "#CEF5E1",
                    "text-secondary": "#8690a3",
                    "secondary": "#143a72",
                    "border-light": "#ebedf0",
                    "shadow-primary": "#171A211F",
                    "background-secondary": "#3597ec",
                    "light": "#ebedf0",
                    "dark": "#173b70",
                    "border-dark": "#d1d1d1",
                    "background-light": "#ebedf0",
                    "text-title": "#143a72"
                    },
                    "fontSize": {
                    "2xs": "0.512rem",
                    "xs": "0.64rem",
                    "sm": "0.8rem",
                    "base": "1rem",
                    "lg": "1.25rem",
                    "xl": "1.563rem",
                    "2xl": "1.953rem"
                    },
                    "lineHeight": {
                    "2xs": "0.687rem",
                    "xs": "0.875rem",
                    "sm": "1.125rem",
                    "base": "1.437rem",
                    "lg": "1.75rem",
                    "xl": "2.187rem",
                    "2xl": "2.75rem"
                    }
                },
                "favicon": "mlifavicon"
            }
    }
};