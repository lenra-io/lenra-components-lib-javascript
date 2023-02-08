import { Component } from './component';
import { IText, TextBaseImpl } from './text.base'

export { IText }

export function Text(value: IText['value']): TextImpl {
  return new TextImpl({
    type: "text",
    value: value,
  });
}

export class TextImpl extends TextBaseImpl {
  // <T extends Component1>(child: Component<T> | T)
  children(children: (Component<IText> | IText)[]) {
    return super.children(children.map(Component.normalize));
  }
}
