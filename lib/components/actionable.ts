import { Actionable as IActionable } from "../component";
import { Component } from "./component";
export { IActionable };

export class Actionable extends Component<IActionable> {
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }
  onDoublePressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onDoublePressed", action, props);
  }
  onLongPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onLongPressed", action, props);
  }
  onPressedCancel(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressedCancel", action, props);
  }
  onHovered(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onHovered", action, props);
  }
  submit(submit) {
    this.model.submit = submit;
    return this;
  }

  static new(child): Actionable {
    return new Actionable({
      type: "actionable",
      child: Component.normalize(child),
    });
  }
}
