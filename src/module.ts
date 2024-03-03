import { defineNuxtModule, addPlugin, createResolver, tryResolveModule } from '@nuxt/kit';

import type { ModuleOptions } from './interface';
import { resolveTDesignComponents, resolveTDesignVariables } from './resolvers';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'TDesign Vue Next Nuxt module',
    configKey: 'tdesign'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options: ModuleOptions, nuxt) {
    const resolver = createResolver(import.meta.url);

    console.log('🚀 tdesign-vue-next nuxt module is loading');

    resolveTDesignVariables(options, nuxt);
    resolveTDesignComponents(options);
  }
});
