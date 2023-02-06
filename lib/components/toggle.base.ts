import { Toggle as IToggle } from '../component'
import { Component } from './component';

export { IToggle }

export class ToggleBaseImpl extends Component<IToggle> {
    splashRadius(splashRadius: IToggle['splashRadius']) {
        this.model.splashRadius = splashRadius;
        return this;
    }
    autofocus(autofocus: IToggle['autofocus']) {
        this.model.autofocus = autofocus;
        return this;
    }
    dragStartBehavior(dragStartBehavior: IToggle['dragStartBehavior']) {
        this.model.dragStartBehavior = dragStartBehavior;
        return this;
    }
    onPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressed", action, props); }
    style(style: IToggle['style']) {
        this.model.style = style;
        return this;
    }
    name(name: IToggle['name']) {
        this.model.name = name;
        return this;
    }
    disabled(disabled: IToggle['disabled']) {
        this.model.disabled = disabled;
        return this;
    }
}
