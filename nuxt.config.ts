export default defineNuxtConfig({
  extends: 'content-wind',

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: '/labveiltec/'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-11-14'
})