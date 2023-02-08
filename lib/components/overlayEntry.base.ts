import { OverlayEntry as IOverlayEntry } from '../component'
import { Component } from './component';

export { IOverlayEntry }

export class OverlayEntryBaseImpl extends Component<IOverlayEntry> {
    maintainState(maintainState: IOverlayEntry['maintainState']) {
        this.model.maintainState = maintainState;
        return this;
    }
    opaque(opaque: IOverlayEntry['opaque']) {
        this.model.opaque = opaque;
        return this;
    }
    showOverlay(showOverlay: IOverlayEntry['showOverlay']) {
        this.model.showOverlay = showOverlay;
        return this;
    }
}
