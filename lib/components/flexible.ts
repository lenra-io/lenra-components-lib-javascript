import { LenraComponent } from '../component';
import { Component } from './component';
import { IFlexible, FlexibleBaseImpl } from './flexible.base'

export { IFlexible }

export function Flexible<T extends LenraComponent>(child: Component<T> | T): FlexibleImpl {
  return new FlexibleImpl({
    _type: "flexible",
    child: Component.normalize(child),
  });
}

export class FlexibleImpl extends FlexibleBaseImpl {
  // Add here custom implementations
}
