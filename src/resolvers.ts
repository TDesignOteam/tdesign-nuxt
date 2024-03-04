import { addComponent, addImportsSources, tryResolveModule } from '@nuxt/kit';
import { join } from 'path';

import { componentMap,pluginList } from './components';
import { map, kebabCase } from 'lodash-es';

import type { ModuleOptions } from './interface';

/**
 * auto import components
 */
export const resolveTDesignComponents = (options: ModuleOptions) => {
  const moduleMode = options.esm ? 'esm' : 'es';
  const prefix = options.prefix ?? 't';

  map(componentMap, (subComponents: string[], keys: string) => {
    subComponents.forEach((component) => {
      addComponent({
        name: `${prefix}-${kebabCase(component)}`,
        // export:''
        filePath: `tdesign-vue-next/${moduleMode}/${keys}/index`
      });
    });
  });
};

/**
 * auto import plugins
 */
export const resolveTDesignPlugins = (options: ModuleOptions) => {
  const moduleMode = options.esm ? 'esm' : 'es';
  const plugins=options.plugins ?? pluginList;
  addImportsSources({
    imports: plugins,
    from: `tdesign-vue-next/${moduleMode}`
  });
};
/**
 * auto import global style
 */
export const resolveTDesignVariables = async (_options: ModuleOptions, nuxt: any) => {
  const tdesignGlobalStyle = await tryResolveModule('tdesign-vue-next/package.json').then((tdLocation) => (tdLocation ? join(tdLocation, '../es/style/index.css') : Promise.reject('Unable to resolve tdesign-vue-next Global Style. Is it installed?')));
  nuxt.options.css.push(tdesignGlobalStyle);
};
