export const pluginList = ['DialogPlugin', 'MessagePlugin', 'NotifyPlugin', 'LoadingPlugin', 'PopupPlugin', 'DrawerPlugin'] as const;
// popupPlugin and drawerPlugin is in progress
export type TdesignPlugin = (typeof pluginList)[number];
