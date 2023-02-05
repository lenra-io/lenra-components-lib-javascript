import { DropdownButton as IDropdownButton } from "../component";
import { Component } from "./component";
export { IDropdownButton };

export class DropdownButton extends Component<IDropdownButton> {
  disabled(disabled) {
    this.model.disabled = disabled;
    return this;
  }
  size(size) {
    this.model.size = size;
    return this;
  }
  mainStyle(mainStyle) {
    this.model.mainStyle = mainStyle;
    return this;
  }
  icon(icon) {
    this.model.icon = icon;
    return this;
  }

  static new(text, child): DropdownButton {
    return new DropdownButton({
      type: "dropdownButton",
      text: text,
      child: Component.normalize(child),
    });
  }
}
