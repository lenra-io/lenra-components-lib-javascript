import { MenuItem as IMenuItem } from '../component'
import { Component } from './component';

export { IMenuItem }

export class MenuItemBaseImpl extends Component<IMenuItem> {
    isSelected(isSelected: IMenuItem['isSelected']) {
        this.model.isSelected = isSelected;
        return this;
    }
    disabled(disabled: IMenuItem['disabled']) {
        this.model.disabled = disabled;
        return this;
    }
    icon(icon: IMenuItem['icon']) {
        this.model.icon = icon;
        return this;
    }
    onPressed(action: string, props?: { [k: string]: unknown; }) { return this.setListener("onPressed", action, props); }
}
