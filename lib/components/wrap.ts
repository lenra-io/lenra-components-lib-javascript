import { Component1, Direction, TextDirection, VerticalDirection, Wrap as IWrap, WrapAlignment, WrapCrossAlignment } from "../component";
import { Component } from "./component";
export { IWrap };

export class Wrap extends Component<IWrap> {
  direction(direction: Direction) {
    this.model.direction = direction;
    return this;
  }
  crossAxisAlignment(crossAxisAlignment: WrapCrossAlignment) {
    this.model.crossAxisAlignment = crossAxisAlignment;
    return this;
  }
  spacing(spacing: number) {
    this.model.spacing = spacing;
    return this;
  }
  runSpacing(runSpacing: number) {
    this.model.runSpacing = runSpacing;
    return this;
  }
  alignment(alignment: WrapAlignment) {
    this.model.alignment = alignment;
    return this;
  }
  runAlignment(runAlignment: WrapAlignment) {
    this.model.runAlignment = runAlignment;
    return this;
  }
  horizontalDirection(horizontalDirection: TextDirection) {
    this.model.horizontalDirection = horizontalDirection;
    return this;
  }
  verticalDirection(verticalDirection: VerticalDirection) {
    this.model.verticalDirection = verticalDirection;
    return this;
  }

  static new<T extends Component1>(...children: (Component<T> | T)[]): Wrap {
    return new Wrap({
      type: "wrap",
      children: children.map(Component.normalize),
    });
  }
}
