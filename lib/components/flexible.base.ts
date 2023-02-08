import { Flexible as IFlexible } from '../component'
import { Component } from './component';

export { IFlexible }

export class FlexibleBaseImpl extends Component<IFlexible> {
    flex(flex: IFlexible['flex']) {
        this.model.flex = flex;
        return this;
    }
    fit(fit: IFlexible['fit']) {
        this.model.fit = fit;
        return this;
    }
}
