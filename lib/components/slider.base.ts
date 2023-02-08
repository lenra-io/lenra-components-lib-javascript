import { Slider as ISlider } from '../component'
import { Component } from './component';

export { ISlider }

export class SliderBaseImpl extends Component<ISlider> {
    style(style: ISlider['style']) {
        this.model.style = style;
        return this;
    }
    autofocus(autofocus: ISlider['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    divisions(divisions: ISlider['divisions']) {
        this.model.divisions = divisions;
        return this;
    }
    label(label: ISlider['label']) {
        this.model.label = label;
        return this;
    }
    min(min: ISlider['min']) {
        this.model.min = min;
        return this;
    }
    max(max: ISlider['max']) {
        this.model.max = max;
        return this;
    }
    onChanged(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onChanged", action, props); }
    onChangeEnd(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onChangeEnd", action, props); }
    onChangeStart(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onChangeStart", action, props); }
    value(value: ISlider['value']) {
        this.model.value = value;
        return this;
    }
    name(name: ISlider['name']) {
        this.model.name = name;
        return this;
    }
}
