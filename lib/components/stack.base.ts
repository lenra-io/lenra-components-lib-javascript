import { Stack as IStack } from '../component'
import { Component } from './component';

export { IStack }

export class StackBaseImpl extends Component<IStack> {
    alignment(alignment: IStack['alignment']) {
        this.model.alignment = alignment;
        return this;
    }
    fit(fit: IStack['fit']) {
        this.model.fit = fit;
        return this;
    }
}
