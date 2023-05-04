import { Slider as ISlider } from '../component'
import { Component } from './component';

export { ISlider }

export class SliderBaseImpl extends Component<ISlider> {
    style(style: ISlider['style']) {
        this.model.style = style;
        return this;
    }
    /**
     * Whether the slider should be focused initially.
     */
    autofocus(autofocus: ISlider['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    /**
     * The number of divisions to show on the slider.
     */
    divisions(divisions: ISlider['divisions']) {
        this.model.divisions = divisions;
        return this;
    }
    /**
     * The label of the slider.
     */
    label(label: ISlider['label']) {
        this.model.label = label;
        return this;
    }
    /**
     * The minimum value of the slider.
     */
    min(min: ISlider['min']) {
        this.model.min = min;
        return this;
    }
    /**
     * The maximum value of the slider.
     */
    max(max: ISlider['max']) {
        this.model.max = max;
        return this;
    }
    /**
     * The callback to be invoked when the slider value changes.
     */
    onChanged(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onChanged", action, props); }
    /**
     * The callback to be invoked when the slider is released.
     */
    onChangeEnd(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onChangeEnd", action, props); }
    /**
     * The callback to be invoked when the slider is pressed.
     */
    onChangeStart(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onChangeStart", action, props); }
    /**
     * The current value of the slider.
     */
    value(value: ISlider['value']) {
        this.model.value = value;
        return this;
    }
    /**
     * The name that will be used in the form.
     */
    name(name: ISlider['name']) {
        this.model.name = name;
        return this;
    }
}
