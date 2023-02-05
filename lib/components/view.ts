import { View as IView } from "../component";
import { Component } from "./component";
export { IView };

export class View extends Component<IView> {
  props(props) {
    this.model.props = props;
    return this;
  }
  context(context) {
    this.model.context = context;
    return this;
  }
  data(coll, query) {
    this.model.coll = coll;
    this.model.query = query;
    return this;
  }
  coll(coll) {
    this.model.coll = coll;
    return this;
  }
  query(query) {
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
