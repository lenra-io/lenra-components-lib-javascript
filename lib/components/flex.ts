import { Component1, Flex as IFlex } from "../component";
import { Component } from "./component";
export { IFlex };

export class Flex extends Component<IFlex> {
  direction(direction) {
    this.model.direction = direction;
    return this;
  }
  mainAxisAlignment(mainAxisAlignment) {
    this.model.mainAxisAlignment = mainAxisAlignment;
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
  fillParent(fillParent) {
    this.model.fillParent = fillParent;
    return this;
  }
  scroll(scroll) {
    this.model.scroll = scroll;
    return this;
  }
  padding(padding) {
    this.model.padding = padding;
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
  textBaseline(textBaseline) {
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
