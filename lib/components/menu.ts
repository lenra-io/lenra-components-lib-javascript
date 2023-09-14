import { LenraComponent } from '../component';
import { Component } from './component';
import { IMenu, MenuBaseImpl } from './menu.base'

export { IMenu }

export function Menu<T extends LenraComponent>(...children: (Component<T> | T)[]): MenuImpl {
  return new MenuImpl({
    _type: "menu",
    children: children.map(Component.normalize),
  });
}

export class MenuImpl extends MenuBaseImpl {
  // Add here custom implementations
}
