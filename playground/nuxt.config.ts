export default defineNuxtConfig({
  modules: ['../src/module'],
  tdesign: {
    resolveIcons: true,
    // include:['Button']
    // exclude: ['Button']
    // iconInclude: ['Edit1']
    // prefix: 'tdesign'
  },
  devtools: { enabled: true }
});
