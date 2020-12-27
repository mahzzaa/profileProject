export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'news-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCdVfmUQyUjVtVDF8VWlaM2-SVghxpVEqI",
          authDomain: "profileproject-bd88d.firebaseapp.com",
          projectId: "profileproject-bd88d",
          storageBucket: "profileproject-bd88d.appspot.com",
          messagingSenderId: "533344160136",
          appId: "1:533344160136:web:09fdaf9fcfa29e708a123d",
          measurementId: "G-RPLX7KK7DF"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
