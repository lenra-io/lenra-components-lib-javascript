import { IIcon } from '..';
import { Component } from './component';
import { IDropdownButton, DropdownButtonBaseImpl } from './dropdownButton.base'

export { IDropdownButton }

export function DropdownButton(text: IDropdownButton['text'], child: IDropdownButton['child']): DropdownButtonImpl {
  return new DropdownButtonImpl({
    _type: "dropdownButton",
    text: text,
    child: child,
  });
}

export class DropdownButtonImpl extends DropdownButtonBaseImpl {
  icon(icon: Component<IIcon> | IIcon) {
    return super.icon(Component.normalize(icon));
  }
}
