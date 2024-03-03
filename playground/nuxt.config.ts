export default defineNuxtConfig({
  modules: ['../src/module'],
  build: {
    transpile: ['tdesign-vue-next']
  },
  devtools: { enabled: true }
});
