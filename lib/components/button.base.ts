import { Button as IButton } from '../component'
import { Component } from './component';

export { IButton }

export class ButtonBaseImpl extends Component<IButton> {
    disabled(disabled: IButton['disabled']) {
        this.model.disabled = disabled;
        return this;
    }
    size(size: IButton['size']) {
        this.model.size = size;
        return this;
    }
    mainStyle(mainStyle: IButton['mainStyle']) {
        this.model.mainStyle = mainStyle;
        return this;
    }
    onPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressed", action, props); }
    leftIcon(leftIcon: IButton['leftIcon']) {
        this.model.leftIcon = leftIcon;
        return this;
    }
    rightIcon(rightIcon: IButton['rightIcon']) {
        this.model.rightIcon = rightIcon;
        return this;
    }
    submit(submit: IButton['submit']) {
        this.model.submit = submit;
        return this;
    }
}
