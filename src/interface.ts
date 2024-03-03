// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * resolve `tdesign-icons'
   * @default true
   */
  resolveIcons?: boolean;
  /**
   * whether to import ESM version
   * @default false
   */
  esm?: boolean;
  /**
   * exclude component name, if match do not resolve the name
   *
   */
  exclude?: string | RegExp | (string | RegExp)[];
  /**
   * self-defined the component prefix
   */
  prefix?: string
}