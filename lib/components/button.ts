import { IIcon } from '..';
import { IButton, ButtonBaseImpl } from './button.base'
import { Component } from './component';

export { IButton }

export function Button(text: IButton['text']): ButtonImpl {
  return new ButtonImpl({
      type: "button",
      text: text,
  });
}

export class ButtonImpl extends ButtonBaseImpl {
  disable() {
    this.model.disabled = true;
    return this;
  }
  enable() {
    this.model.disabled = false;
    return this;
  }

  leftIcon(icon: Component<IIcon> | IIcon) {
    this.model.leftIcon = Component.normalize(icon);
    return this;
  }
  rightIcon(icon: Component<IIcon> | IIcon) {
    this.model.rightIcon = Component.normalize(icon);
    return this;
  }
}
