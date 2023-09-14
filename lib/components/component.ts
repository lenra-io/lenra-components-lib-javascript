import { LenraComponent as IComponent } from "../component";

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
    name: string,
    props?: { [k: string]: unknown }
  ) {
    this.model[event] = {
      _type: "listener",
      name,
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
