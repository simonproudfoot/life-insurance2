import colors from 'vuetify/es5/util/colors'
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Nunito:wght@700&display=swap' }
    ],
    script: [
      { hid: 'CookieDeclaration', 'data-cbid' : 'a01a09ef-f0f0-45d4-b516-bd20342681d3', 'data-blockingmode':"auto",  id: 'CookieDeclaration', src: 'https://consent.cookiebot.com/uc.js', async: true }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modulesDir: ['dist/_nuxt/node_modules'],
  axios: {
    // baseURL: 'https://mediamaze-mothership.online/',
    proxyHeaders: false,
    credentials: false
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    // // FB Pixel
    // ['nuxt-facebook-pixel-module', {
    //   track: 'PageView',
    //   pixelId: '255576682371157',
    //   disabled: false
    // }],
    // ['@yabhq/nuxt-hotjar', {
    //   hjid: 1951428, // required
    //   hjsv: 6, // optional
    //   defer: false, // optional
    //   async: false, // optional
    //   dev: false // optional
    // }],
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Nunito',
      }
    },
    theme: {
      themes: {
        light: {
          primary: colors.blue,
          dark: '#0B3868',
          lightgrey: '#f0f0f0',
          accent: colors.orange,
          secondary: '#de8c01',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#10ab5f'
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    analyze: true,
    extractCSS: true
  }
}
