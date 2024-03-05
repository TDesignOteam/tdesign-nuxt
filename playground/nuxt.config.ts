export default defineNuxtConfig({
  modules: ['../src/module'],
  build: {
    transpile: ['tdesign-vue-next']
  },
  tdesign: {
    // prefix: 'tdesign'
  },
  devtools: { enabled: true }
});
