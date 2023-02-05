import { Icon as IIcon } from "../component";
import { Component } from "./component";
export { IIcon };

export class Icon extends Component<IIcon> {
  size(size) {
    this.model.size = size;
    return this;
  }
  color(color) {
    this.model.color = color;
    return this;
  }
  semanticLabel(semanticLabel) {
    this.model.semanticLabel = semanticLabel;
    return this;
  }

  static new(value): Icon {
    return new Icon({
      type: "icon",
      value: value,
    });
  }
}
