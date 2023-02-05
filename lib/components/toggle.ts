import { DragStartBehavior, Toggle as IToggle, ToggleStyle } from "../component";
import { Component } from "./component";
export { IToggle };

export class Toggle extends Component<IToggle> {
  splashRadius(splashRadius: number) {
    this.model.splashRadius = splashRadius;
    return this;
  }
  autofocus(autofocus: boolean) {
    this.model.autofocus = autofocus;
    return this;
  }
  dragStartBehavior(dragStartBehavior: DragStartBehavior) {
    this.model.dragStartBehavior = dragStartBehavior;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }
  style(style: ToggleStyle) {
    this.model.style = style;
    return this;
  }
  name(name: string) {
    this.model.name = name;
    return this;
  }
  disabled(disabled: boolean) {
    this.model.disabled = disabled;
    return this;
  }

  static new(value: boolean): Toggle {
    return new Toggle({
      type: "toggle",
      value: value,
    });
  }
}
