import { Component1, Direction, Flex as IFlex, Padding, TextDirection, VerticalDirection, TextBaseline } from "../component";
import { Component } from "./component";
export { IFlex };

export class Flex extends Component<IFlex> {
  direction(direction: Direction) {
    this.model.direction = direction;
    return this;
  }
  mainAxisAlignment(mainAxisAlignment: "start" | "end" | "center" | "spaceBetween" | "spaceAround" | "spaceEvenly") {
    this.model.mainAxisAlignment = mainAxisAlignment;
    return this;
  }
  crossAxisAlignment(crossAxisAlignment: "start" | "end" | "center" | "stretch" | "baseline") {
    this.model.crossAxisAlignment = crossAxisAlignment;
    return this;
  }
  spacing(spacing: number) {
    this.model.spacing = spacing;
    return this;
  }
  fillParent(fillParent: boolean) {
    this.model.fillParent = fillParent;
    return this;
  }
  scroll(scroll: boolean) {
    this.model.scroll = scroll;
    return this;
  }
  padding(padding: Padding) {
    this.model.padding = padding;
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
  textBaseline(textBaseline: TextBaseline) {
    this.model.textBaseline = textBaseline;
    return this;
  }
  addChild<T extends Component1>(child: Component<T> | T) {
    this.model.children.push(Component.normalize(child));
    return this;
  }

  static new<T extends Component1>(...children: (Component<T> | T)[]): Flex {
    return new Flex({
      type: "flex",
      children: children.map(Component.normalize),
    });
  }
}
