import { ICheckbox, CheckboxBaseImpl } from './checkbox.base'

export { ICheckbox }

export function Checkbox(value: ICheckbox['value']): CheckboxImpl {
  return new CheckboxImpl({
      _type: "checkbox",
      value: value,
  });
}

export class CheckboxImpl extends CheckboxBaseImpl {
  // Add here custom implementations
}
