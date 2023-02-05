import { Icon, IIcon } from "..";
import { Component1, DropdownButton as IDropdownButton, Size, Style } from "../component";
import { Component } from "./component";
export { IDropdownButton };

export class DropdownButton extends Component<IDropdownButton> {
  disabled(disabled: boolean) {
    this.model.disabled = disabled;
    return this;
  }
  size(size: Size) {
    this.model.size = size;
    return this;
  }
  mainStyle(mainStyle: Style) {
    this.model.mainStyle = mainStyle;
    return this;
  }
  icon(icon: Icon | IIcon) {
    this.model.icon = Component.normalize(icon);
    return this;
  }

  static new<T extends Component1>(text: string, child: Component<T> | T): DropdownButton {
    return new DropdownButton({
      type: "dropdownButton",
      text: text,
      child: Component.normalize(child),
    });
  }
}
