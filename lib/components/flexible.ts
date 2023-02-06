import { Component1 } from '../component';
import { Component } from './component';
import { IFlexible, FlexibleBaseImpl } from './flexible.base'

export { IFlexible }

export function Flexible<T extends Component1>(child: Component<T> | T): FlexibleImpl {
  return new FlexibleImpl({
    type: "flexible",
    child: Component.normalize(child),
  });
}

export class FlexibleImpl extends FlexibleBaseImpl {
  // Add here custom implementations
}
