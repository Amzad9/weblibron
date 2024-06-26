// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/google-fonts',
    'nuxt-icon'
  ],
  css: ["assets/main.css"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  nitro: {
    preset: 'node-server'
  },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  ssr: false
})
