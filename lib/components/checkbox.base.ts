import { Checkbox as ICheckbox } from '../component'
import { Component } from './component';

export { ICheckbox }

export class CheckboxBaseImpl extends Component<ICheckbox> {
    tristate(tristate: ICheckbox['tristate']) {
        this.model.tristate = tristate;
        return this;
    }
    onPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressed", action, props); }
    style(style: ICheckbox['style']) {
        this.model.style = style;
        return this;
    }
    materialTapTargetSize(materialTapTargetSize: ICheckbox['materialTapTargetSize']) {
        this.model.materialTapTargetSize = materialTapTargetSize;
        return this;
    }
    autofocus(autofocus: ICheckbox['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    name(name: ICheckbox['name']) {
        this.model.name = name;
        return this;
    }
}
