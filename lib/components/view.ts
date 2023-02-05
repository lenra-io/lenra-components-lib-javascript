import { Props, View as IView } from "../component";
import { Component } from "./component";
export { IView };

export class View extends Component<IView> {
  props(props: Props) {
    this.model.props = props;
    return this;
  }
  context(context: boolean) {
    this.model.context = context;
    return this;
  }
  data(coll: string, query: { [k: string]: unknown }) {
    this.model.coll = coll;
    this.model.query = query;
    return this;
  }
  coll(coll: string) {
    this.model.coll = coll;
    return this;
  }
  query(query: { [k: string]: unknown }) {
    this.model.query = query;
    return this;
  }

  static new(name): View {
    return new View({
      type: "view",
      name: name,
    });
  }
}
