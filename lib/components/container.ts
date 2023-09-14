import { border, borderRadius, colors, padding } from '..';
import { Colors } from '../colors';
import { BorderRadius, BoxShadow, BoxShape, LenraComponent } from '../component';
import { Component } from './component';
import { IContainer, ContainerBaseImpl } from './container.base'

export { IContainer }

export function Container<T extends LenraComponent>(child?: Component<T> | T): ContainerImpl {
  const el = new ContainerImpl({
    _type: "container",
  });
  if (child) el.child(child);
  return el;
}

Container.card = function <T extends LenraComponent>(child?: Component<T> | T): ContainerImpl {
  const el = new ContainerImpl({
    _type: "container",
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

export class ContainerImpl extends ContainerBaseImpl {
  // Add here custom implementations
  child<T extends LenraComponent>(child: Component<T> | T) {
    return super.child(Component.normalize(child));
  }

  // Constraints
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
}
