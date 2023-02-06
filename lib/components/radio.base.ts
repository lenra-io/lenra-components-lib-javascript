import { Radio as IRadio } from '../component'
import { Component } from './component';

export { IRadio }

export class RadioBaseImpl extends Component<IRadio> {
    autofocus(autofocus: IRadio['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    materialTapTargetSize(materialTapTargetSize: IRadio['materialTapTargetSize']) {
        this.model.materialTapTargetSize = materialTapTargetSize;
        return this;
    }
    onPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressed", action, props); }
    toggleable(toggleable: IRadio['toggleable']) {
        this.model.toggleable = toggleable;
        return this;
    }
    style(style: IRadio['style']) {
        this.model.style = style;
        return this;
    }
    name(name: IRadio['name']) {
        this.model.name = name;
        return this;
    }
}
