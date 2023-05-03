import { Flex as IFlex } from '../component'
import { Component } from './component';

export { IFlex }

export class FlexBaseImpl extends Component<IFlex> {
    direction(direction: IFlex['direction']) {
        this.model.direction = direction;
        return this;
    }
    /**
     * The alignment along the main axis
     */
    mainAxisAlignment(mainAxisAlignment: IFlex['mainAxisAlignment']) {
        this.model.mainAxisAlignment = mainAxisAlignment;
        return this;
    }
    /**
     * The alignment along the cross axis
     */
    crossAxisAlignment(crossAxisAlignment: IFlex['crossAxisAlignment']) {
        this.model.crossAxisAlignment = crossAxisAlignment;
        return this;
    }
    /**
     * The multiplier of the base size for the minimal spacing
     */
    spacing(spacing: IFlex['spacing']) {
        this.model.spacing = spacing;
        return this;
    }
    /**
     * if true the flex will fill the main axis. Otherwise it will take the children size.
     */
    fillParent(fillParent: IFlex['fillParent']) {
        this.model.fillParent = fillParent;
        return this;
    }
    /**
     * If true the flex will scroll if there is too many item in the Main Axis.
     */
    scroll(scroll: IFlex['scroll']) {
        this.model.scroll = scroll;
        return this;
    }
    padding(padding: IFlex['padding']) {
        this.model.padding = padding;
        return this;
    }
    horizontalDirection(horizontalDirection: IFlex['horizontalDirection']) {
        this.model.horizontalDirection = horizontalDirection;
        return this;
    }
    verticalDirection(verticalDirection: IFlex['verticalDirection']) {
        this.model.verticalDirection = verticalDirection;
        return this;
    }
    textBaseline(textBaseline: IFlex['textBaseline']) {
        this.model.textBaseline = textBaseline;
        return this;
    }
}
