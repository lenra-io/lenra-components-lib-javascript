import { View as IView } from '../component'
import { Component } from './component';

export { IView }

export class ViewBaseImpl extends Component<IView> {
    props(props: IView['props']) {
        this.model.props = props;
        return this;
    }
    /**
     * Find query.
     */
    find(find: IView['find']) {
        this.model.find = find;
        return this;
    }
    /**
     * The query to apply to the data.
     * @deprecated 
     */
    query(query: IView['query']) {
        this.model.query = query;
        return this;
    }
    /**
     * the collection where the query is applied
     * @deprecated 
     */
    coll(coll: IView['coll']) {
        this.model.coll = coll;
        return this;
    }
    context(context: IView['context']) {
        this.model.context = context;
        return this;
    }
}
