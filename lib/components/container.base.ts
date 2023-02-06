import { Container as IContainer } from '../component'
import { Component } from './component';

export { IContainer }

export class ContainerBaseImpl extends Component<IContainer> {
    child(child: IContainer['child']) {
        this.model.child = child;
        return this;
    }
    alignment(alignment: IContainer['alignment']) {
        this.model.alignment = alignment;
        return this;
    }
    border(border: IContainer['border']) {
        this.model.border = border;
        return this;
    }
    padding(padding: IContainer['padding']) {
        this.model.padding = padding;
        return this;
    }
    constraints(constraints: IContainer['constraints']) {
        this.model.constraints = constraints;
        return this;
    }
    decoration(decoration: IContainer['decoration']) {
        this.model.decoration = decoration;
        return this;
    }
}
