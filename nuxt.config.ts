export default defineNuxtConfig({
  extends: 'content-wind',
  app: {
    baseURL: '/labveiltec/'
  },
  routeRules: {
    '/': { prerender: true }
  }
})
