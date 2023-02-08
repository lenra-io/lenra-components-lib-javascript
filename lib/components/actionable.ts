import { Component1 } from '../component';
import { IActionable, ActionableBaseImpl } from './actionable.base'
import { Component } from './component';

export { IActionable }

export function Actionable<T extends Component1>(child: Component<T> | T): ActionableImpl {
  return new ActionableImpl({
    type: "actionable",
    child: Component.normalize(child),
  });
}

export class ActionableImpl extends ActionableBaseImpl {
  // Add here custom implementations
}
