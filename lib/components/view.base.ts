import { View as IView } from '../component'
import { Component } from './component';

export { IView }

export class ViewBaseImpl extends Component<IView> {
    props(props: IView['props']) {
        this.model.props = props;
        return this;
    }
    find(find: IView['find']) {
        this.model.find = find;
        return this;
    }
    query(query: IView['query']) {
        this.model.query = query;
        return this;
    }
    coll(coll: IView['coll']) {
        this.model.coll = coll;
        return this;
    }
    context(context: IView['context']) {
        this.model.context = context;
        return this;
    }
}
