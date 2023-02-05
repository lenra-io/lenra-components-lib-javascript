import { Component1, Menu as IMenu } from "../component";
import { Component } from "./component";
export { IMenu };

export class Menu extends Component<IMenu> {
  static new<T extends Component1>(...children: (Component<T> | T)[]): Menu {
    return new Menu({
      type: "menu",
      children: children.map(Component.normalize),
    });
  }
}
