import { Radio as IRadio } from "../component";
import { Component } from "./component";
export { IRadio };

export class Radio extends Component<IRadio> {
  autofocus(autofocus) {
    this.model.autofocus = autofocus;
    return this;
  }
  materialTapTargetSize(materialTapTargetSize) {
    this.model.materialTapTargetSize = materialTapTargetSize;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }
  toggleable(toggleable) {
    this.model.toggleable = toggleable;
    return this;
  }
  style(style) {
    this.model.style = style;
    return this;
  }
  name(name) {
    this.model.name = name;
    return this;
  }

  static new(value, groupValue): Radio {
    return new Radio({
      type: "radio",
      value: value,
      groupValue: groupValue,
    });
  }
}
