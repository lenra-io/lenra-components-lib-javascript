import { Component1, Stack as IStack } from "../component";
import { Component } from "./component";
export { IStack };

export class Stack extends Component<IStack> {
  alignment(alignment) {
    this.model.alignment = alignment;
    return this;
  }
  fit(fit) {
    this.model.fit = fit;
    return this;
  }

  static new<T extends Component1>(...children: (Component<T> | T)[]): Stack {
    return new Stack({
      type: "stack",
      children: children.map(Component.normalize),
    });
  }
}
