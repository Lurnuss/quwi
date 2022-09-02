export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Quwi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Quwi_logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/services.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
// Auth
  router: {
    middleware: 'auth'
  },
  toast: {
    position: 'bottom-left',
    keepOnHover: true,
    duration: 5000,
    className: 'toast_alert',
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          maxAge: false,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: false
        },
        endpoints: {
          login: { url: 'https://api.quwi.com/v2/auth/login', method: 'post' },
          logout: { url: 'https://api.quwi.com/v2/auth/logout', method: 'post' },
          user: { url: 'https://api.quwi.com/v2/auth/init', method: 'get' }
        },
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
