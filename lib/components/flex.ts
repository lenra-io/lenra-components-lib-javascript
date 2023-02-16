import { Component1 } from '../component';
import { Component } from './component';
import { IFlex, FlexBaseImpl } from './flex.base'

export { IFlex }

export function Flex(...children: (Component<Component1> | Component1)[]): FlexImpl {
  return new FlexImpl({
    type: "flex",
    children: children.map(Component.normalize),
  });
}

export class FlexImpl extends FlexBaseImpl {
  addChild(child: Component<Component1> | Component1) {
    this.model.children.push(Component.normalize(child));
    return this;
  }
}
