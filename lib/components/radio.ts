import { IRadio, RadioBaseImpl } from './radio.base'

export { IRadio }

export function Radio(value: IRadio['value'], groupValue: IRadio['groupValue']): RadioImpl {
  return new RadioImpl({
    _type: "radio",
    value: value,
    groupValue: groupValue,
  });
}

export class RadioImpl extends RadioBaseImpl {
  // Add here custom implementations
}
