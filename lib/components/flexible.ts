import { FlexFit, Flexible as IFlexible } from "../component";
import { Component } from "./component";
export { IFlexible };

export class Flexible extends Component<IFlexible> {
  flex(flex: number) {
    this.model.flex = flex;
    return this;
  }
  fit(fit: FlexFit) {
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
