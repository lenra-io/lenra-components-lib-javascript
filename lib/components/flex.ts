import { LenraComponent } from '../component';
import { Component } from './component';
import { IFlex, FlexBaseImpl } from './flex.base'

export { IFlex }

export function Flex(children: (Component<LenraComponent> | LenraComponent)[] = []): FlexImpl {
  return new FlexImpl({
    _type: "flex",
    children: children.map(Component.normalize),
  });
}

export class FlexImpl extends FlexBaseImpl {
  addChild(child: Component<LenraComponent> | LenraComponent) {
    this.model.children.push(Component.normalize(child));
    return this;
  }
}
