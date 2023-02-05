import { Checkbox as ICheckbox } from "../component";
import { Component } from "./component";
export { ICheckbox };

export class Checkbox extends Component<ICheckbox> {
  tristate(tristate) {
    this.model.tristate = tristate;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }
  style(style) {
    this.model.style = style;
    return this;
  }
  materialTapTargetSize(materialTapTargetSize) {
    this.model.materialTapTargetSize = materialTapTargetSize;
    return this;
  }
  autofocus(autofocus) {
    this.model.autofocus = autofocus;
    return this;
  }
  name(name) {
    this.model.name = name;
    return this;
  }

  static new(value): Checkbox {
    return new Checkbox({
      type: "checkbox",
      value: value,
    });
  }
}
