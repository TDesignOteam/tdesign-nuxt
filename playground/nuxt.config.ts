export default defineNuxtConfig({
  modules: ['../src/module'],
  build: {
    transpile: ['tdesign-vue-next']
  },
  tdesign: {
    resolveIcons: true
    // iconExclude: ['Edit1']
    // prefix: 'tdesign'
    // exclude: ['Button']
  },
  devtools: { enabled: true }
});
