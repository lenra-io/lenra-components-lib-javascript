import { Radio as IRadio } from '../component'
import { Component } from './component';

export { IRadio }

export class RadioBaseImpl extends Component<IRadio> {
    /**
     * Whether the radio will be selected initially.
     */
    autofocus(autofocus: IRadio['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    /**
     * Configures the minimum size of the tap target.
     */
    materialTapTargetSize(materialTapTargetSize: IRadio['materialTapTargetSize']) {
        this.model.materialTapTargetSize = materialTapTargetSize;
        return this;
    }
    onPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressed", action, props); }
    /**
     * Whether the radio is allowed to go from checked to unchecked when clicking on it.
     */
    toggleable(toggleable: IRadio['toggleable']) {
        this.model.toggleable = toggleable;
        return this;
    }
    style(style: IRadio['style']) {
        this.model.style = style;
        return this;
    }
    /**
     * The name that will be used in the form.
     */
    name(name: IRadio['name']) {
        this.model.name = name;
        return this;
    }
}
