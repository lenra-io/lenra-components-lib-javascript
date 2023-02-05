import { Checkbox as ICheckbox, CheckboxStyle, MaterialTapTargetSize } from "../component";
import { Component } from "./component";
export { ICheckbox };

export class Checkbox extends Component<ICheckbox> {
  tristate(tristate: boolean) {
    this.model.tristate = tristate;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }
  style(style: CheckboxStyle) {
    this.model.style = style;
    return this;
  }
  materialTapTargetSize(materialTapTargetSize: MaterialTapTargetSize) {
    this.model.materialTapTargetSize = materialTapTargetSize;
    return this;
  }
  autofocus(autofocus: boolean) {
    this.model.autofocus = autofocus;
    return this;
  }
  name(name: string) {
    this.model.name = name;
    return this;
  }

  static new(value: boolean): Checkbox {
    return new Checkbox({
      type: "checkbox",
      value: value,
    });
  }
}
