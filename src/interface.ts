// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * whether to import ESM version
   * @default false
   */
  esm?: boolean;
  /**
   * exclude component name, if match do not resolve the name
   */
  exclude?: string | RegExp | (string | RegExp)[];
  /**
   * import plugin
   *
   */
  plugins?: Array<string>;
  /**
   * self-defined the component prefix
   */
  prefix?: string;
  /**
   * resolve `tdesign-icons-vue-next'
   * @default false
   */
  resolveIcons?: boolean;
  /**
   * self-defined the icon prefix
   * @default undefined
   */
  iconPrefix?: string;
  /**
   * exclude icon, if match do not resolve the icon from tdesign-icons-vue-next
   */
  iconExclude?: string | RegExp | (string | RegExp)[];
}
