export default defineNuxtConfig({
  modules: ['../src/module'],
  tdesign: {
    resolveIcons: true
    // include:['Button']
    // exclude: ['Button']
    // iconInclude: ['Edit1']
    // prefix: 'tdesign'
    // plugins:['NotifyPlugin'],
    // importVariables:'~/assets/theme.css'
  },
  devtools: { enabled: true },
  devServer: { port: 17001 }
});
