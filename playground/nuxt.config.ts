export default defineNuxtConfig({
  modules: ['../src/module'],
  tdesign: {
    resolveIcons: true
    // iconExclude: ['Edit1']
    // prefix: 'tdesign'
    // exclude: ['Button']
  },
  devtools: { enabled: true }
});
