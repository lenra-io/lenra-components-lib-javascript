import { Flexible as IFlexible } from "../component";
import { Component } from "./component";
export { IFlexible };

export class Flexible extends Component<IFlexible> {
  flex(flex) {
    this.model.flex = flex;
    return this;
  }
  fit(fit) {
    this.model.fit = fit;
    return this;
  }

  static new(child): Flexible {
    return new Flexible({
      type: "flexible",
      child: Component.normalize(child),
    });
  }
}
