import { Component1 } from '../component';
import { Component } from './component';
import { IFlex, FlexBaseImpl } from './flex.base'

export { IFlex }

export function Flex<T extends Component1>(...children: (Component<T> | T)[]): FlexImpl {
  return new FlexImpl({
    type: "flex",
    children: children.map(Component.normalize),
  });
}

export class FlexImpl extends FlexBaseImpl {
  addChild<T extends Component1>(child: Component<T> | T) {
    this.model.children.push(Component.normalize(child));
    return this;
  }
}
