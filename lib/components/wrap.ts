import { LenraComponent } from '../component';
import { Component } from './component';
import { IWrap, WrapBaseImpl } from './wrap.base'

export { IWrap }

export function Wrap(children: (Component<LenraComponent> | LenraComponent)[] = []): WrapImpl {
  return new WrapImpl({
    _type: "wrap",
    children: children.map(Component.normalize),
  });
}

export class WrapImpl extends WrapBaseImpl {
  // Add here custom implementations
}
