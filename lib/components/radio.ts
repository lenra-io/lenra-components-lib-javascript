import { MaterialTapTargetSize, Radio as IRadio, RadioStyle } from "../component";
import { Component } from "./component";
export { IRadio };

export class Radio extends Component<IRadio> {
  autofocus(autofocus: boolean) {
    this.model.autofocus = autofocus;
    return this;
  }
  materialTapTargetSize(materialTapTargetSize: MaterialTapTargetSize) {
    this.model.materialTapTargetSize = materialTapTargetSize;
    return this;
  }
  onPressed(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onPressed", action, props);
  }
  toggleable(toggleable: boolean) {
    this.model.toggleable = toggleable;
    return this;
  }
  style(style: RadioStyle) {
    this.model.style = style;
    return this;
  }
  name(name: string) {
    this.model.name = name;
    return this;
  }

  static new(value: string, groupValue: string): Radio {
    return new Radio({
      type: "radio",
      value: value,
      groupValue: groupValue,
    });
  }
}
