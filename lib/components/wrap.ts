import { Component1 } from '../component';
import { Component } from './component';
import { IWrap, WrapBaseImpl } from './wrap.base'

export { IWrap }

export function Wrap(children: (Component<Component1> | Component1)[] = []): WrapImpl {
  return new WrapImpl({
    type: "wrap",
    children: children.map(Component.normalize),
  });
}

export class WrapImpl extends WrapBaseImpl {
  // Add here custom implementations
}
