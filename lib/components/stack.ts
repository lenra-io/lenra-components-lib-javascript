import { LenraComponent } from '../component';
import { Component } from './component';
import { IStack, StackBaseImpl } from './stack.base'

export { IStack }

export function Stack(children: (Component<LenraComponent> | LenraComponent)[] = []): StackImpl {
  return new StackImpl({
    _type: "stack",
    children: children.map(Component.normalize),
  });
}

export class StackImpl extends StackBaseImpl {
  // Add here custom implementations
}
