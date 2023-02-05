import {
  Button as IButton,
  Icon as IIcon,
  Style as IStyle,
  Size as ISize,
  Listener as IListener,
  Listener,
} from "../component";
import { Component } from "./component";
export { IButton, IIcon, IStyle, IListener };

export class Button extends Component<IButton> {
  disabled(disabled) {
    this.model.disabled = disabled;
    return this;
  }
  disable() {
    this.model.disabled = true;
    return this;
  }
  enable() {
    this.model.disabled = false;
    return this;
  }
  submit(val) {
    this.model.submit = val === undefined ? true : val;
    return this;
  }
  leftIcon(icon: IIcon) {
    this.model.leftIcon = icon;
    return this;
  }
  rightIcon(icon: IIcon) {
    this.model.rightIcon = icon;
    return this;
  }
  mainStyle(style: IStyle) {
    this.model.mainStyle = style;
    return this;
  }
  size(size: ISize) {
    this.model.size = size;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }

  static new(text: string): Button {
    return new Button({
      type: "button",
      text: text,
    });
  }
}
