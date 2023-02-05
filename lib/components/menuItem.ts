import { MenuItem as IMenuItem } from "../component";
import { Component } from "./component";
export { IMenuItem };

export class MenuItem extends Component<IMenuItem> {
  isSelected(isSelected) {
    this.model.isSelected = isSelected;
    return this;
  }
  disabled(disabled) {
    this.model.disabled = disabled;
    return this;
  }
  icon(icon) {
    this.model.icon = icon;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }

  static new(text): MenuItem {
    return new MenuItem({
      type: "menuItem",
      text: text,
    });
  }
}
