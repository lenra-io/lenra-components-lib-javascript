import { Icon as IIcon, IconData } from "../component";
import { Component } from "./component";
export { IIcon };

export class Icon extends Component<IIcon> {
  size(size: number) {
    this.model.size = size;
    return this;
  }
  color(color: number) {
    this.model.color = color;
    return this;
  }
  semanticLabel(semanticLabel: string) {
    this.model.semanticLabel = semanticLabel;
    return this;
  }

  static new(value: IconData): Icon {
    return new Icon({
      type: "icon",
      value: value,
    });
  }
}
