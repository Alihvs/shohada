export default {
  // Headers of the page
  head: {
    title: 'شهدای کن',
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'سایت یادواره شهدای کن', hid: 'description' },
      { name: 'apple-mobile-web-app-title', content: 'Shohada Kan' },
      { name: 'application-name', content: 'Shohada Kan' },
      //   { name: 'msapplication-TileColor', content: '#263238' },
      //   { name: 'msapplication-TileImage', content: '/favicons/mstile-144x144.png' },
      //   { name: 'msapplication-config', content: '/favicons/browserconfig.xml' },
      //   { name: 'theme-color', content: '#263238' },
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'shortcut icon', href: '/favicons/favicon.ico' },
    ],
  },

  // Global stylesheets
  css: ['~/assets/css/global.scss', 'vue-multiselect/dist/vue-multiselect.min.css'],
  // Plugins
  plugins: [{ src: '~/plugins/vue-lazyload' }],
};
