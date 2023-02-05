import {
  Container as IContainer,
  Component as IComponent,
  Component1,
  Border,
  BoxDecoration,
  BorderRadius,
  BoxShape,
  BoxShadow,
  Alignment,
  Alignment1,
  Padding,
} from "../component";
import { Component } from "./component";
import * as border from "../border";
import { Colors } from "../colors";
import { borderRadius, colors, padding } from "..";

export class Container extends Component<IContainer> {
  alignment(alignment: Alignment) {
    this.model.alignment = alignment;
    return this;
  }
  border(border: Border) {
    this.model.border = border;
    return this;
  }
  child<T extends Component1>(child: Component<T> | T) {
    this.model.child = Component.normalize(child);
    return this;
  }
  padding(padding: Padding) {
    this.model.padding = padding;
    return this;
  }

  // Constraints
  constraints(border: Border) {
    this.model.border = border;
    return this;
  }
  width(width: number) {
    if (!this.model.constraints) this.model.constraints = {};
    this.model.constraints.minWidth = this.model.constraints.maxWidth = width;
    return this;
  }
  minWidth(width: number) {
    if (!this.model.constraints) this.model.constraints = {};
    this.model.constraints.minWidth = width;
    return this;
  }
  maxWidth(width: number) {
    if (!this.model.constraints) this.model.constraints = {};
    this.model.constraints.maxWidth = width;
    return this;
  }
  height(height: number) {
    if (!this.model.constraints) this.model.constraints = {};
    this.model.constraints.minHeight = this.model.constraints.maxHeight =
      height;
    return this;
  }
  minHeight(height: number) {
    if (!this.model.constraints) this.model.constraints = {};
    this.model.constraints.minHeight = height;
    return this;
  }
  maxHeight(height: number) {
    if (!this.model.constraints) this.model.constraints = {};
    this.model.constraints.maxHeight = height;
    return this;
  }

  // Decoration
  decoration(decoration: BoxDecoration) {
    this.model.decoration = decoration;
    return this;
  }
  borderRadius(borderRadius: BorderRadius) {
    if (!this.model.decoration) this.model.decoration = {};
    this.model.decoration.borderRadius = borderRadius;
    return this;
  }
  boxShadow(boxShadow: BoxShadow) {
    if (!this.model.decoration) this.model.decoration = {};
    this.model.decoration.boxShadow = boxShadow;
    return this;
  }
  color(color: number) {
    if (!this.model.decoration) this.model.decoration = {};
    this.model.decoration.color = color;
    return this;
  }
  shape(shape: BoxShape) {
    if (!this.model.decoration) this.model.decoration = {};
    this.model.decoration.shape = shape;
    return this;
  }

  // Constructors
  static new<T extends Component1>(child?: Component<T> | T): Container {
    const el = new Container({
      type: "container",
    });
    if (child) el.child(child);
    return el;
  }
  static card<T extends Component1>(child?: Component<T> | T): Container {
    const el = new Container({
      type: "container",
    })
      .border(
        border.all({
          width: 1,
          color: 0xffdce0e7,
        })
      )
      .padding(padding.all(16))
      .color(Colors.white)
      .borderRadius(borderRadius.all(8))
      .boxShadow({
        blurRadius: 10,
        offset: {
          dx: 4,
          dy: 4,
        },
        color: colors.opacity(Colors.black, 0.5),
      });
    if (child) el.child(child);
    return el;
  }
}
