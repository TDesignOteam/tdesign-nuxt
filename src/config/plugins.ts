export const pluginList = ['DialogPlugin', 'MessagePlugin', 'NotifyPlugin', 'LoadingPlugin', 'PopupPlugin', 'DrawerPlugin'] as const;

export type TdesignPlugin = typeof pluginList[number];
// popupPlugin and drawerPlugin is in progress
