import { Component1 } from '../component';
import { Component } from './component';
import { IWrap, WrapBaseImpl } from './wrap.base'

export { IWrap }

export function Wrap<T extends Component1>(...children: (Component<T> | T)[]): WrapImpl {
  return new WrapImpl({
    type: "wrap",
    children: children.map(Component.normalize),
  });
}

export class WrapImpl extends WrapBaseImpl {
  // Add here custom implementations
}
