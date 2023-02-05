import { Text as IText } from "../component";
import { Component } from "./component";
export { IText };

export class Text extends Component<IText> {
  style(style) {
    this.model.style = style;
    return this;
  }
  locale(locale) {
    this.model.locale = locale;
    return this;
  }
  semanticsLabel(semanticsLabel) {
    this.model.semanticsLabel = semanticsLabel;
    return this;
  }
  spellOut(spellOut) {
    this.model.spellOut = spellOut;
    return this;
  }
  textAlign(textAlign) {
    this.model.textAlign = textAlign;
    return this;
  }
  children(...children) {
    this.model.children = children.map(Component.normalize);
    return this;
  }

  static new(value): Text {
    return new Text({
      type: "text",
      value: value,
    });
  }
}
