import { Icon as IIcon } from '../component'
import { Component } from './component';

export { IIcon }

export class IconBaseImpl extends Component<IIcon> {
    /**
     * The size of the Icon
     */
    size(size: IIcon['size']) {
        this.model.size = size;
        return this;
    }
    /**
     * The color of the Icon. If not set or null, the color is inherited from the theme.
     */
    color(color: IIcon['color']) {
        this.model.color = color;
        return this;
    }
    /**
     * The semantic label for the Icon. This will be announced when using accessibility mode.
     */
    semanticLabel(semanticLabel: IIcon['semanticLabel']) {
        this.model.semanticLabel = semanticLabel;
        return this;
    }
    style(style: IIcon['style']) {
        this.model.style = style;
        return this;
    }
}
