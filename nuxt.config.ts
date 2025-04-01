export default defineNuxtConfig({

  // To re-enable _all_ Nuxt v3 behavior, set the following options:
  compatibilityDate: '2025-03-26',

  experimental: {
    scanPageMeta: 'after-resolve',
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    normalizeComponentNames: false,
    spaLoadingTemplateLocation: 'within',
    defaults: {
      useAsyncData: {
        deep: true
      }
    }
  },
  ssr: false,
  unhead: {
    renderSSRHeadOptions: {
      omitLineBreaks: false
    }
  },

  future: {
    compatibilityVersion: 4,
  },
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],

  image: {
    domains: ["https://cdn.dummyjson.com"],
  },
  googleFonts: {
    families: {
      Montserrat: true
    }
  },
  target: "static",
  router: {
    base: "/nuxt-recipe/", // Make sure this matches your repository name
  },

  // Uncomment this line if you're using Firebase or other plugins
  // plugins: ["~/plugins/firebase.vue"],
});
