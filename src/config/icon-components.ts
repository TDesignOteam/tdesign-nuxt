export const iconComponentList = ['Icon', 'IconFont'] as const;

export type TDesignIconComponents = (typeof iconComponentList)[number];

export const iconComponentMap:Record<TDesignIconComponents,string> = {
  Icon: 'svg-sprite',
  IconFont: 'iconfont'
};