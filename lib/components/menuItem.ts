import { IMenuItem, MenuItemBaseImpl } from './menuItem.base'

export { IMenuItem }

export function MenuItem(text: IMenuItem['text']): MenuItemImpl {
  return new MenuItemImpl({
      _type: "menuItem",
      text: text,
  });
}

export class MenuItemImpl extends MenuItemBaseImpl {
  // Add here custom implementations
}
