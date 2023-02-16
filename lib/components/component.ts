import { Component1 as IComponent } from "../component";

export { IComponent }

export abstract class Component<T> {
  protected model: T;
  constructor(model: T) {
    this.model = model;
  }
  toJSON(): T {
    return this.model;
  }

  protected setListener(
    event: string,
    action: string,
    props?: { [k: string]: unknown }
  ) {
    this.model[event] = {
      action,
    };
    if (props !== undefined) this.model[event].props = props;
    return this;
  }

  static normalize<T extends IComponent>(child: Component<T> | T): T {
    if (child instanceof Component) {
      return child.toJSON();
    }
    return child;
  }
}
