import { Component1 } from '../component';
import { Component } from './component';
import { IStack, StackBaseImpl } from './stack.base'

export { IStack }

export function Stack(...children: (Component<Component1> | Component1)[]): StackImpl {
  return new StackImpl({
    type: "stack",
    children: children.map(Component.normalize),
  });
}

export class StackImpl extends StackBaseImpl {
  // Add here custom implementations
}
