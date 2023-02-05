import { Locale, Text as IText, TextStyle } from "../component";
import { Component } from "./component";
export { IText };

export class Text extends Component<IText> {
  style(style: TextStyle) {
    this.model.style = style;
    return this;
  }
  locale(locale: Locale) {
    this.model.locale = locale;
    return this;
  }
  semanticsLabel(semanticsLabel: string) {
    this.model.semanticsLabel = semanticsLabel;
    return this;
  }
  spellOut(spellOut: boolean) {
    this.model.spellOut = spellOut;
    return this;
  }
  textAlign(textAlign: "left" | "center" | "right" | "justify" | "start" | "end") {
    this.model.textAlign = textAlign;
    return this;
  }
  children(...children: (Text | IText)[]) {
    this.model.children = children.map(Component.normalize);
    return this;
  }

  static new(value: string): Text {
    return new Text({
      type: "text",
      value: value,
    });
  }
}
