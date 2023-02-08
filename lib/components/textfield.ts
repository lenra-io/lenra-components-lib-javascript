import { ITextField, TextFieldBaseImpl } from './textfield.base'

export { ITextField }

export function TextField(value: ITextField['value']): TextFieldImpl {
  return new TextFieldImpl({
      type: "textfield",
      value: value,
  });
}

export class TextFieldImpl extends TextFieldBaseImpl {
  // Add here custom implementations
}
