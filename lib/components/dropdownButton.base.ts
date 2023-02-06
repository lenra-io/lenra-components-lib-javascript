import { DropdownButton as IDropdownButton } from '../component'
import { Component } from './component';

export { IDropdownButton }

export class DropdownButtonBaseImpl extends Component<IDropdownButton> {
    disabled(disabled: IDropdownButton['disabled']) {
        this.model.disabled = disabled;
        return this;
    }
    size(size: IDropdownButton['size']) {
        this.model.size = size;
        return this;
    }
    mainStyle(mainStyle: IDropdownButton['mainStyle']) {
        this.model.mainStyle = mainStyle;
        return this;
    }
    icon(icon: IDropdownButton['icon']) {
        this.model.icon = icon;
        return this;
    }
}
