// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    port: 4500
  },
  app: {
    head : {
      title: 'NFT-Marketplace ',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {hid: 'description', name: 'NFT-Marketplace is a collection of comic website'}
      ],
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300&display=swap',
          onload: 'this.onload=null; this.rel=stylesheet'
        }
      ],
  },
  },
  css: [
    'primeflex/primeflex.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css',
    'tailwindcss/base.css',
    'tailwindcss/components.css',
    'tailwindcss/utilities.css'
  ],
  /* components: [
    {
      path: '~/components',
      pathPrefix: false

    }
  ], */
  build: {
    transpile : ['primevue'] //To convert/render 
  },
  plugins: [
    {src: 'plugins/primevue-plugin.js'}
  ],
  modules: [
    'nuxt-primevue',
    'tailwindcss'
  ],
  
})