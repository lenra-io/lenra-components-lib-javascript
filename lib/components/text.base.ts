import { Text as IText } from '../component'
import { Component } from './component';

export { IText }

export class TextBaseImpl extends Component<IText> {
    style(style: IText['style']) {
        this.model.style = style;
        return this;
    }
    locale(locale: IText['locale']) {
        this.model.locale = locale;
        return this;
    }
    semanticsLabel(semanticsLabel: IText['semanticsLabel']) {
        this.model.semanticsLabel = semanticsLabel;
        return this;
    }
    spellOut(spellOut: IText['spellOut']) {
        this.model.spellOut = spellOut;
        return this;
    }
    textAlign(textAlign: IText['textAlign']) {
        this.model.textAlign = textAlign;
        return this;
    }
    children(children: IText['children']) {
        this.model.children = children;
        return this;
    }
}
