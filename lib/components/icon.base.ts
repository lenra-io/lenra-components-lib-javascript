import { Icon as IIcon } from '../component'
import { Component } from './component';

export { IIcon }

export class IconBaseImpl extends Component<IIcon> {
    size(size: IIcon['size']) {
        this.model.size = size;
        return this;
    }
    color(color: IIcon['color']) {
        this.model.color = color;
        return this;
    }
    semanticLabel(semanticLabel: IIcon['semanticLabel']) {
        this.model.semanticLabel = semanticLabel;
        return this;
    }
    style(style: IIcon['style']) {
        this.model.style = style;
        return this;
    }
}
