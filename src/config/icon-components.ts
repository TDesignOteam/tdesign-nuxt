export const iconComponentList = ['Icon', 'IconFont'] as const;
export type TDesignIconComponent = (typeof iconComponentList)[number];

export const iconComponentMap = {
  Icon: 'svg-sprite',
  IconFont: 'iconfont'
};
