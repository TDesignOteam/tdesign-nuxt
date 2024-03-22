export default defineNuxtConfig({
  modules: ['../src/module'],
  tdesign: {
    resolveIcons: true,
    // include:['Button']
    // exclude: ['Button']
    // iconInclude: ['Edit1']
    // prefix: 'tdesign'
    // plugins:['NotifyPlugin'],
    // importVariables:false
  },
  // css:['~/assets/theme.css'],
  devtools: { enabled: true }
});
