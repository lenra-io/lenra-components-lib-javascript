import { LenraComponent } from '../component';
import { IActionable, ActionableBaseImpl } from './actionable.base'
import { Component } from './component';

export { IActionable }

export function Actionable<T extends LenraComponent>(child: Component<T> | T): ActionableImpl {
  return new ActionableImpl({
    _type: "actionable",
    child: Component.normalize(child),
  });
}

export class ActionableImpl extends ActionableBaseImpl {
  // Add here custom implementations
}
