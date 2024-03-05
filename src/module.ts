import { defineNuxtModule, createResolver } from '@nuxt/kit';
import { resolveTDesignComponents, resolveTDesignPlugins, resolveTDesignVariables, resolveTDesignIcons } from './resolvers';

import type { ModuleOptions } from './interface';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'TDesign Vue Next Nuxt module',
    configKey: 'tdesign'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    resolveIcons: false,
    esm: false,
    exclude: undefined,
    prefix: undefined,
    iconExclude: undefined,
    iconPrefix: undefined,
    plugins: undefined
  },
  setup(options: ModuleOptions, nuxt) {
    const resolver = createResolver(import.meta.url);

    console.log('🚀 nuxt module for tdesign-vue-next is loading');

    resolveTDesignVariables(options, nuxt);
    resolveTDesignComponents(options);
    resolveTDesignPlugins(options);
    options.resolveIcons && resolveTDesignIcons(options);
  }
});
