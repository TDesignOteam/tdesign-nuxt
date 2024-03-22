export const pluginList = ['DialogPlugin', 'MessagePlugin', 'NotifyPlugin', 'LoadingPlugin'] as const;
// PopupPlugin and DrawerPlugin is in progress
export type TdesignPlugin = typeof pluginList[number];

