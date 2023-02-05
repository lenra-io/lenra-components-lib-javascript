import { Wrap as IWrap } from "../component";
import { Component } from "./component";
export { IWrap };

export class Wrap extends Component<IWrap> {
  direction(direction) {
    this.model.direction = direction;
    return this;
  }
  crossAxisAlignment(crossAxisAlignment) {
    this.model.crossAxisAlignment = crossAxisAlignment;
    return this;
  }
  spacing(spacing) {
    this.model.spacing = spacing;
    return this;
  }
  runSpacing(runSpacing) {
    this.model.runSpacing = runSpacing;
    return this;
  }
  alignment(alignment) {
    this.model.alignment = alignment;
    return this;
  }
  runAlignment(runAlignment) {
    this.model.runAlignment = runAlignment;
    return this;
  }
  horizontalDirection(horizontalDirection) {
    this.model.horizontalDirection = horizontalDirection;
    return this;
  }
  verticalDirection(verticalDirection) {
    this.model.verticalDirection = verticalDirection;
    return this;
  }

  static new(...children): Wrap {
    return new Wrap({
      type: "wrap",
      children: children.map(Component.normalize),
    });
  }
}
