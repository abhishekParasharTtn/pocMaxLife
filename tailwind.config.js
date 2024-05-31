module.exports = {
  content: [
    './src/features/**/*.js', //
    './src/pages/**/*.js',
    './src/lib/**/*.js',
    './src/app/**/*.js',
    './node_modules/unified-payment/lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        default: '#1DA1F2',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        active: 'var(--color-active)',
        inactive: 'var(--color-inactive)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
        'grey-dark': 'var(--color-grey-dark)',
      },
      textColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-text-secondary)',
        white:'var(--color-text-white)',
        'link-primary': 'var(--color-text-link-primary)',
        'link-secondary': 'var(--color-text-link-secondary)',
        error: 'var(--color-text-error)',
        success: 'var(--color-text-success)',
        title: 'var(--color-text-title)',
        disable: 'var(--color-text-disable)',
      },
      backgroundColor: {
        primary: 'var(--color-background-primary)',
        secondary: 'var(--color-background-secondary)',
        secondary2:'var(--color-secondary2)',
        success: 'var(--color-background-success)',
        highlight: 'var(--color-background-highlight)',
        light: 'var(--color-background-light)',
        active: 'var(--color-background-active)',
        default: 'var(--color-background-default)',
        'default-dark': 'var(--color-background-default-dark)',
      },
      placeholderColor: {
        primary: 'var(--color-placeholder-primary)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        secondary: 'var(--color-border-secondary)',
        light: 'var(--color-border-light)',
        error: 'var(--color-border-error)',
        dark: 'var(--color-border-dark)',
      },
      fontSize: {
        '2xs': ['var(--size-font-2xs)', 'var(--line-height-2xs)'],
        xs: ['var(--size-font-xs)', 'var(--line-height-xs)'],
        sm: ['var(--size-font-sm)', 'var(--line-height-sm)'],
        base: ['var(--size-font-base)', 'var(--line-height-base)'],
        lg: ['var(--size-font-lg)', 'var(--line-height-lg)'],
        xl: ['var(--size-font-xl)', 'var(--line-height-xl)'],
        '2xl': ['var(--size-font-2xl)', 'var(--line-height-2xl)'],
      },
      lineHeight: {
        '2xs': 'var(--line-height-2xs)',
        xs: 'var(--line-height-xs)',
        sm: 'var(--line-height-sm)',
        base: 'var(--line-height-base)',
        lg: 'var(--line-height-lg)',
        xl: 'var(--line-height-xl)',
        '2xl': 'var(--line-height-2xl)',
      },
      screens: {
        sm: '40rem', // 640px
        md: '48rem', // 768px
        lg: '76.5rem', // 1080px
        xl: '85.375rem', // 1366px
      },
      fontFamily: {
        'family-regular': 'var(--font-family-regular)',
        'family-semi-bold': 'var(--font-family-semi-bold)',
        'family-bold': 'var(--font-family-bold)',
        'family-light': 'var(--font-family-light)',
        sans: ['var(--font-family-regular)', 'var(--font-family-sans)'],
        serif: ['var(--font-family-regular)', 'var(--font-family-serif)'],
        mono: ['var(--font-family-regular)', 'var(--font-family-mono)'],
      },
      boxShadow: {
        type1: '0px 6px 12px var(--color-shadow-primary)',
        type2: '0px 6px 12px var(--color-shadow-secondary)',
      },
      width: {
        'input-width': 'var(--input-width)',
        'select-width': 'var(--select-width)',
        'textarea-width': 'var(--textarea-width)',
        'footer-md-width': 'var(--footer-md-width)',
      },
      spacing: {
        'checkbox-padding': 'var(--declarationAcceptance-padding)',
        'checkbox-margin': 'var(--declarationAcceptance-margin)',
        'radio-padding': 'var(--radio-padding)',
        'radio-margin': 'var(--radio-margin)',
      },
    },
  },
  variants: {},
  plugins: [],
};