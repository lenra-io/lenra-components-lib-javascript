import { Wrap as IWrap } from '../component'
import { Component } from './component';

export { IWrap }

export class WrapBaseImpl extends Component<IWrap> {
    direction(direction: IWrap['direction']) {
        this.model.direction = direction;
        return this;
    }
    crossAxisAlignment(crossAxisAlignment: IWrap['crossAxisAlignment']) {
        this.model.crossAxisAlignment = crossAxisAlignment;
        return this;
    }
    /**
     * The spacing between each child of the wrap.
     */
    spacing(spacing: IWrap['spacing']) {
        this.model.spacing = spacing;
        return this;
    }
    /**
     * The spacing between each run of the wrap.
     */
    runSpacing(runSpacing: IWrap['runSpacing']) {
        this.model.runSpacing = runSpacing;
        return this;
    }
    alignment(alignment: IWrap['alignment']) {
        this.model.alignment = alignment;
        return this;
    }
    runAlignment(runAlignment: IWrap['runAlignment']) {
        this.model.runAlignment = runAlignment;
        return this;
    }
    horizontalDirection(horizontalDirection: IWrap['horizontalDirection']) {
        this.model.horizontalDirection = horizontalDirection;
        return this;
    }
    verticalDirection(verticalDirection: IWrap['verticalDirection']) {
        this.model.verticalDirection = verticalDirection;
        return this;
    }
}
