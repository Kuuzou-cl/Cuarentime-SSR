const webpack = require('webpack')
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cuarentime',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ],
    script: [
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#E8175D' },
  /*
  ** Global CSS
  */
  css: [
    'plyr/dist/plyr.css',
    'bootstrap/dist/css/bootstrap.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/bootstrap.js',
    '~/plugins/vue-plyr'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    /*
    ['@nuxtjs/google-analytics', {
      id: 'UA-71938715-4'
    }]
    */
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDRSGXVXKWJZU9Y5pSeTcjs9XrHOoguMVY',
          authDomain: 'cuarentime-b5a8c.firebaseapp.com',
          databaseURL: 'https://cuarentime-b5a8c.firebaseio.com',
          projectId: 'cuarentime-b5a8c',
          storageBucket: 'cuarentime-b5a8c.appspot.com',
          messagingSenderId: '238791426857',
          appId: '1:238791426857:web:32526edc8b7f65258b6d38"',
        },
        services: {
          auth: true,
          firestore: true,
        }
      }
    ],
    ['nuxt-lazy-load', {
      directiveOnly: true,
      observerConfig: {
        threshold: 0.3
      }
    }],
    '@nuxtjs/device',
    /* 
    instance.$device.isDesktop
    instance.$device.isMobile
    instance.$device.isTablet
    instance.$device.isMobileOrTablet
    instance.$device.isDesktopOrTablet
    instance.$device.isIos
    instance.$device.isWindows
    instance.$device.isMacOS 
    */
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    // proxyHeaders: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, ctx) {
    }
  },
}
