import { Icon, IIcon } from "..";
import { MenuItem as IMenuItem } from "../component";
import { Component } from "./component";
export { IMenuItem };

export class MenuItem extends Component<IMenuItem> {
  isSelected(isSelected: boolean) {
    this.model.isSelected = isSelected;
    return this;
  }
  disabled(disabled: boolean) {
    this.model.disabled = disabled;
    return this;
  }
  icon(icon: Icon | IIcon) {
    this.model.icon = Component.normalize(icon);
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }

  static new(text: string): MenuItem {
    return new MenuItem({
      type: "menuItem",
      text: text,
    });
  }
}
