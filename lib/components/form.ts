import { Form as IForm } from "../component";
import { Component } from "./component";
export { IForm };

export class Form extends Component<IForm> {
  onSubmit(action: string, props?: { [k: string]: unknown }) {
    return this.setListener("onSubmit", action, props);
  }

  static new(child): Form {
    return new Form({
      type: "form",
      child: Component.normalize(child),
    });
  }
}
