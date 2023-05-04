import { IView, ViewBaseImpl } from './view.base'

export { IView }

export function View(name: IView['name']): ViewImpl {
  return new ViewImpl({
    type: "view",
    name: name,
  });
}

export class ViewImpl extends ViewBaseImpl {
  // Add here custom implementations
  data(coll: string, query?: { [k: string]: unknown }, projection?: { [k: string]: unknown }) {
    this.find({ coll, query, projection });
    return this;
  }

  coll(coll: string): this {
    if (!this.model.find) this.model.find = { coll };
    else this.model.find.coll = coll;
    return this;
  }

  query(query: { [k: string]: unknown; }): this {
    if (!this.model.find) this.model.find = { coll: "", query };
    else this.model.find.query = query;
    return this;
  }
}
