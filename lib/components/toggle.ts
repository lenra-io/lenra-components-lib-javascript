import { Toggle as IToggle } from "../component";
import { Component } from "./component";
export { IToggle };

export class Toggle extends Component<IToggle> {
  splashRadius(splashRadius) {
    this.model.splashRadius = splashRadius;
    return this;
  }
  autofocus(autofocus) {
    this.model.autofocus = autofocus;
    return this;
  }
  dragStartBehavior(dragStartBehavior) {
    this.model.dragStartBehavior = dragStartBehavior;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }
  style(style) {
    this.model.style = style;
    return this;
  }
  name(name) {
    this.model.name = name;
    return this;
  }
  disabled(disabled) {
    this.model.disabled = disabled;
    return this;
  }

  static new(value): Toggle {
    return new Toggle({
      type: "toggle",
      value: value,
    });
  }
}
