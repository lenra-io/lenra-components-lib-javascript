import { IView, ViewBaseImpl } from './view.base'

export { IView }

export function View(name: IView['name']): ViewImpl {
  return new ViewImpl({
    _type: "view",
    name: name,
  });
}

export class ViewImpl extends ViewBaseImpl {
  // Add here custom implementations
  find(find: IView['find'])
  find(coll: string, query?: { [k: string]: unknown }, projection?: { [k: string]: unknown })
  find(param1: IView['find'] | string, query?: { [k: string]: unknown }, projection?: { [k: string]: unknown }) {
    if (typeof param1 === "string") { // param 1 is now guaranteed to be string
      return super.find({ coll: param1, query, projection });
    }
    return super.find(param1);
  }
}
