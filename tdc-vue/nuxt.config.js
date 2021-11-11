export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tdc-vue',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/stage.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
     '@/plugins/basicpass-api'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@braid/vue-formulate/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    trailingSlash: false,
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'basicpass',
        path: '/basic-pass/:id',
        components: {
          default: resolve(__dirname, 'pages/basic-pass/_id.vue'), // or routes[index].component
        },
      });
      routes.push({
        name: 'notfound',
        path: '/not-found',
        component: resolve(__dirname, 'pages/404.vue')
      });
      routes.push({
        name: 'notsupported',
        path: '*',
        redirect: '/not-found'
      });
    }
  },
  service: {
    teste() { 
      console.log("teste");
    }
  }
}
