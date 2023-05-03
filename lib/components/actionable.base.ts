import { Actionable as IActionable } from '../component'
import { Component } from './component';

export { IActionable }

export class ActionableBaseImpl extends Component<IActionable> {
    /**
     * The listener to be called when the actionable is pressed.
     */
    onPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressed", action, props); }
    /**
     * The listener to be called when the actionable is double pressed.
     */
    onDoublePressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onDoublePressed", action, props); }
    /**
     * The listener to be called when the actionable is long pressed.
     */
    onLongPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onLongPressed", action, props); }
    /**
     * The listener to be called when the actionable is pressed inside and released outside of the actionable, causing it to cancel the press action.
     */
    onPressedCancel(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressedCancel", action, props); }
    /**
     * The listener to be called when the actionable is hovered and when the mouse exits the hoverable area.
     */
    onHovered(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onHovered", action, props); }
    /**
     * Whether the actionable can submit a form.
     */
    submit(submit: IActionable['submit']) {
        this.model.submit = submit;
        return this;
    }
}
