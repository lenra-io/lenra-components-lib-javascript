import { IToggle, ToggleBaseImpl } from './toggle.base'

export { IToggle }

export function Toggle(value: IToggle['value']): ToggleImpl {
  return new ToggleImpl({
      _type: "toggle",
      value: value,
  });
}

export class ToggleImpl extends ToggleBaseImpl {
  // Add here custom implementations
}
