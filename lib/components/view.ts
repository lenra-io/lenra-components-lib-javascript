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
}
