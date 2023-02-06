import { Component1 } from "../component";

export abstract class Component<T> {
  protected model: T;
  protected constructor(model: T) {
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

  static normalize<T extends Component1>(child: Component<T> | T): T {
    if (child instanceof Component) {
      return child.toJSON();
    }
    return child;
  }
}
