import { Slider as ISlider } from "../component";
import { Component } from "./component";
export { ISlider };

export class Slider extends Component<ISlider> {
  style(style) {
    this.model.style = style;
    return this;
  }
  autofocus(autofocus) {
    this.model.autofocus = autofocus;
    return this;
  }
  divisions(divisions) {
    this.model.divisions = divisions;
    return this;
  }
  label(label) {
    this.model.label = label;
    return this;
  }
  min(min) {
    this.model.min = min;
    return this;
  }
  max(max) {
    this.model.max = max;
    return this;
  }
  onChanged(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onChanged", action, props);
  }
  onChangeEnd(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onChangeEnd", action, props);
  }
  onChangeStart(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onChangeStart", action, props);
  }
  value(value) {
    this.model.value = value;
    return this;
  }
  name(name) {
    this.model.name = name;
    return this;
  }

  static new(): Slider {
    return new Slider({
      type: "slider",
    });
  }
}
