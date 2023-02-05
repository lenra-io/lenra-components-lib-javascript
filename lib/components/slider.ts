import { Slider as ISlider, SliderStyle } from "../component";
import { Component } from "./component";
export { ISlider };

export class Slider extends Component<ISlider> {
  style(style: SliderStyle) {
    this.model.style = style;
    return this;
  }
  autofocus(autofocus: boolean) {
    this.model.autofocus = autofocus;
    return this;
  }
  divisions(divisions: number) {
    this.model.divisions = divisions;
    return this;
  }
  label(label: string) {
    this.model.label = label;
    return this;
  }
  min(min: number) {
    this.model.min = min;
    return this;
  }
  max(max: number) {
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
  value(value: number) {
    this.model.value = value;
    return this;
  }
  name(name: string) {
    this.model.name = name;
    return this;
  }

  static new(): Slider {
    return new Slider({
      type: "slider",
    });
  }
}
