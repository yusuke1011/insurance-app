module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'insurance-matching-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://kit.fontawesome.com/9ce29d4066.js', crossorigin: 'anonymous'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [
    //register my components
    { src: '~plugins/basics' },
  ],
  /*
  ** @nuxtjs/style-resources
  */
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    sass: [
      '~/assets/scss/variable.scss'
    ]
  },
  /*
  ** @nuxtjs/style-resources
  */
 css: [
    { src: '~/node_modules/bulma/bulma.sass', lang: 'sass' },
  ]
}

