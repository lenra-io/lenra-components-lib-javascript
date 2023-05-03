import { MenuItem as IMenuItem } from '../component'
import { Component } from './component';

export { IMenuItem }

export class MenuItemBaseImpl extends Component<IMenuItem> {
    /**
     * Whether the element is selected or not.
     */
    isSelected(isSelected: IMenuItem['isSelected']) {
        this.model.isSelected = isSelected;
        return this;
    }
    /**
     * Whether the element should be disabled or not.
     */
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
