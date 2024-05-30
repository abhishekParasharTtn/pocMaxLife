 'use client'
 import { globalThemeConfig  } from '../../../app/config/theme.config'

 const getProductsOfLogicalOR = (value1, value2) => value1 || value2;
 const  Theme = ({ themeConfig = globalThemeConfig }) => {

 

    const {
        colors: defaultColors,
        fontSize: defaultFontSize,
        lineHeight: defaultLineHeight,
        fontFamily: defaultFontFamily,
    } = themeConfig.themeConfigs[0].style.style;


    let { colors, fontSize, lineHeight, fontFamily } = themeConfig.themeConfigs[0].style?.style || globalThemeConfig;

    colors = getProductsOfLogicalOR(colors, defaultColors);

    fontSize = getProductsOfLogicalOR(fontSize, defaultFontSize);
    lineHeight = getProductsOfLogicalOR(lineHeight, defaultLineHeight);
    fontFamily = getProductsOfLogicalOR(fontFamily, defaultFontFamily);

   

    return (
        <style jsx global>
             {`
    
                html {
                    background-color: var(--color-background-default-dark);
                    --color-default: ${getProductsOfLogicalOR(
                        colors.default,
                        defaultColors.default
                    )};
                    --color-primary: ${getProductsOfLogicalOR(
                        colors.primary,
                        defaultColors.primary
                    )};
                    --color-secondary: ${getProductsOfLogicalOR(
                        colors.secondary,
                        defaultColors.secondary
                    )};
                    --color-active: ${getProductsOfLogicalOR(
                        colors.active,
                        defaultColors.active
                    )};
                    --color-inactive: ${getProductsOfLogicalOR(
                        colors.inactive,
                        defaultColors.inactive
                    )};
                    --color-light: ${getProductsOfLogicalOR(
                        colors.light,
                        defaultColors.light
                    )};
                    --color-dark: ${getProductsOfLogicalOR(colors.dark, defaultColors.dark)};
                    --color-grey-dark: ${getProductsOfLogicalOR(
                        colors['grey-dark'],
                        defaultColors['grey-dark']
                    )};
                    --color-metal-grey: ${getProductsOfLogicalOR(
                        colors['metal-grey'],
                        defaultColors['metal-grey']
                    )};

                    --color-text-primary: ${getProductsOfLogicalOR(
                        colors['text-primary'],
                        defaultColors['text-primary']
                    )};
                    --color-text-secondary: ${getProductsOfLogicalOR(
                        colors['text-secondary'],
                        defaultColors['text-secondary']
                    )};
                    --color-text-link-primary: ${getProductsOfLogicalOR(
                        colors['text-link-primary'],
                        defaultColors['text-link-primary']
                    )};
                    --color-text-link-secondary: ${getProductsOfLogicalOR(
                        colors['text-link-secondary'],
                        defaultColors['text-link-secondary']
                    )};
                    --color-text-error: ${getProductsOfLogicalOR(
                        colors['text-error'],
                        defaultColors['text-error']
                    )};
                    --color-text-success: ${getProductsOfLogicalOR(
                        colors['text-success'],
                        defaultColors['text-success']
                    )};
                    --color-text-title: ${getProductsOfLogicalOR(
                        colors['text-title'],
                        defaultColors['text-title']
                    )};
                    --color-text-disable: ${getProductsOfLogicalOR(
                        colors['text-disable'],
                        defaultColors['text-disable']
                    )};

                    --color-background-primary: ${getProductsOfLogicalOR(
                        colors['background-primary'],
                        defaultColors['background-primary']
                    )};
                    --color-background-secondary: ${getProductsOfLogicalOR(
                        colors['background-secondary'],
                        defaultColors['background-secondary']
                    )};
                    --color-background-success: ${getProductsOfLogicalOR(
                        colors['background-success'],
                        defaultColors['background-success']
                    )};
                    --color-background-light: ${getProductsOfLogicalOR(
                        colors['background-light'],
                        defaultColors['background-light']
                    )};
                    --color-background-active: ${getProductsOfLogicalOR(
                        colors['background-active'],
                        defaultColors['background-active']
                    )};
                    --color-background-default: ${getProductsOfLogicalOR(
                        colors['background-default'],
                        defaultColors['background-default']
                    )};
                    --color-background-default-dark: ${getProductsOfLogicalOR(
                        colors['background-default-dark'],
                        defaultColors['background-default-dark']
                    )};
                    --color-background-highlight: ${getProductsOfLogicalOR(
                        colors['background-highlight'],
                        defaultColors['background-highlight']
                    )};

                    --color-placeholder-primary: ${getProductsOfLogicalOR(
                        colors['placeholder-primary'],
                        defaultColors['placeholder-primary']
                    )};

                    --color-border-primary: ${getProductsOfLogicalOR(
                        colors['border-primary'],
                        defaultColors['border-primary']
                    )};
                    --color-border-secondary: ${getProductsOfLogicalOR(
                        colors['border-secondary'],
                        defaultColors['border-secondary']
                    )};
                    --color-border-light: ${getProductsOfLogicalOR(
                        colors['border-light'],
                        defaultColors['border-light']
                    )};
                    --color-border-error: ${getProductsOfLogicalOR(
                        colors['border-error'],
                        defaultColors['border-error']
                    )};
                    --color-border-dark: ${getProductsOfLogicalOR(
                        colors['border-dark'],
                        defaultColors['border-dark']
                    )};

                    --color-shadow-primary: ${getProductsOfLogicalOR(
                        colors['shadow-primary'],
                        defaultColors['shadow-primary']
                    )};
                    --color-shadow-secondary: ${getProductsOfLogicalOR(
                        colors['shadow-secondary'],
                        defaultColors['shadow-secondary']
                    )};

                    --size-font-2xs: ${getProductsOfLogicalOR(
                        fontSize['2xs'],
                        defaultFontSize['2xs']
                    )};
                    --size-font-xs: ${getProductsOfLogicalOR(fontSize.xs, defaultFontSize.xs)};
                    --size-font-sm: ${getProductsOfLogicalOR(fontSize.sm, defaultFontSize.sm)};
                    --size-font-base: ${getProductsOfLogicalOR(
                        fontSize.base,
                        defaultFontSize.base
                    )};
                    --size-font-lg: ${getProductsOfLogicalOR(fontSize.lg, defaultFontSize.lg)};
                    --size-font-xl: ${getProductsOfLogicalOR(fontSize.xl, defaultFontSize.xl)};
                    --size-font-2xl: ${getProductsOfLogicalOR(
                        fontSize['2xl'],
                        defaultFontSize['2xl']
                    )};

                    --line-height-2xs: ${getProductsOfLogicalOR(
                        lineHeight['2xs'],
                        defaultLineHeight['2xs']
                    )};
                    --line-height-xs: ${getProductsOfLogicalOR(
                        lineHeight.xs,
                        defaultLineHeight.xs
                    )};
                    --line-height-sm: ${getProductsOfLogicalOR(
                        lineHeight.sm,
                        defaultLineHeight.sm
                    )};
                    --line-height-base: ${getProductsOfLogicalOR(
                        lineHeight.base,
                        defaultLineHeight.base
                    )};
                    --line-height-lg: ${getProductsOfLogicalOR(
                        lineHeight.lg,
                        defaultLineHeight.lg
                    )};
                    --line-height-xl: ${getProductsOfLogicalOR(
                        lineHeight.xl,
                        defaultLineHeight.xl
                    )};
                    --line-height-2xl: ${getProductsOfLogicalOR(
                        lineHeight['2xl'],
                        defaultLineHeight['2xl']
                    )};

                    
                }

                .modal-open {
                    overflow: hidden;
                }

                .container {
                    width: 100%;
                    @media (min-width: 768px) {
                        max-width: 53.5rem;
                    }
                }

                .inner-container {
                    width: 100%;
                    @media (min-width: 768px) {
                        max-width: 39.75rem;
                    }
                }
            `}
        </style>
        
    );
};

export default Theme;
