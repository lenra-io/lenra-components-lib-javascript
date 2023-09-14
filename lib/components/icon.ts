import { IIcon, IconBaseImpl } from './icon.base'

export { IIcon }

export function Icon(value: IIcon['value']): IconImpl {
  return new IconImpl({
      _type: "icon",
      value: value,
  });
}

export class IconImpl extends IconBaseImpl {
  // Add here custom implementations
}
