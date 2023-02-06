import { Component1 } from '../component';
import { Component } from './component';
import { IMenu, MenuBaseImpl } from './menu.base'

export { IMenu }

export function Menu<T extends Component1>(...children: (Component<T> | T)[]): MenuImpl {
  return new MenuImpl({
    type: "menu",
    children: children.map(Component.normalize),
  });
}

export class MenuImpl extends MenuBaseImpl {
  // Add here custom implementations
}
