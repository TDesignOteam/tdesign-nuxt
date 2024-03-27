import { defineNuxtModule, createResolver } from '@nuxt/kit';
import { resolveTDesignComponents, resolveTDesignPlugins, resolveTDesignVariables, resolveTDesignIcons } from './resolvers';

import type { ModuleOptions } from './interface';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'TDesign Vue Next Nuxt module',
    configKey: 'tdesign'
  },
  defaults: {
    esm: false,
    prefix: 't',
    exclude: undefined,
    include: undefined,
    resolveIcons: false,
    iconPrefix: undefined,
    iconExclude: undefined,
    iconInclude: undefined,
    plugins: undefined,
    importVariables: true
  },
  async setup(options: ModuleOptions, nuxt) {
    const resolver = createResolver(import.meta.url);
    console.log('🚀 nuxt module for tdesign-vue-next is loading');

    nuxt.options.build.transpile.push('tdesign-vue-next');
    nuxt.options.build.transpile.push('tdesign-icons-vue-next');

    options.esm && nuxt.options.build.transpile.push('dayjs');

    if (typeof options.importVariables == 'string') {
      const customizeTheme = await resolver.resolvePath(options.importVariables);
      nuxt.options.css.push(customizeTheme);
    } else {
      options.importVariables && resolveTDesignVariables(options);
    }

    resolveTDesignComponents(options);
    resolveTDesignPlugins(options);
    options.resolveIcons && resolveTDesignIcons(options);
  }
});
