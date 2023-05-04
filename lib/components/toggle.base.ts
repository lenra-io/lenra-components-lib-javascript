import { Toggle as IToggle } from '../component'
import { Component } from './component';

export { IToggle }

export class ToggleBaseImpl extends Component<IToggle> {
    /**
     * The splash radius when you click on the toggle.
     */
    splashRadius(splashRadius: IToggle['splashRadius']) {
        this.model.splashRadius = splashRadius;
        return this;
    }
    /**
     * The default focus in boolean.
     */
    autofocus(autofocus: IToggle['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    /**
     * Determines the way that drag start behavior is handled.
     */
    dragStartBehavior(dragStartBehavior: IToggle['dragStartBehavior']) {
        this.model.dragStartBehavior = dragStartBehavior;
        return this;
    }
    onPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressed", action, props); }
    style(style: IToggle['style']) {
        this.model.style = style;
        return this;
    }
    /**
     * The name that will be used in the form.
     */
    name(name: IToggle['name']) {
        this.model.name = name;
        return this;
    }
    /**
     * The toggle is disabled if true
     */
    disabled(disabled: IToggle['disabled']) {
        this.model.disabled = disabled;
        return this;
    }
}
