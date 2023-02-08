import { Form as IForm } from '../component'
import { Component } from './component';

export { IForm }

export class FormBaseImpl extends Component<IForm> {
    onSubmit(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onSubmit", action, props); }
}
