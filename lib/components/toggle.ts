import { IToggle, ToggleBaseImpl } from './toggle.base'

export { IToggle }

export function Toggle(value: IToggle['value']): ToggleImpl {
  return new ToggleImpl({
      type: "toggle",
      value: value,
  });
}

export class ToggleImpl extends ToggleBaseImpl {
  // Add here custom implementations
}
