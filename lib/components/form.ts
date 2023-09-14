import { LenraComponent } from '../component';
import { Component } from './component';
import { IForm, FormBaseImpl } from './form.base'

export { IForm }

export function Form<T extends LenraComponent>(child: Component<T> | T): FormImpl {
  return new FormImpl({
    _type: "form",
    child: Component.normalize(child),
  });
}

export class FormImpl extends FormBaseImpl {
  // Add here custom implementations
}
