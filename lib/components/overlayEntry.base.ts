import { OverlayEntry as IOverlayEntry } from '../component'
import { Component } from './component';

export { IOverlayEntry }

export class OverlayEntryBaseImpl extends Component<IOverlayEntry> {
    /**
     * Whether this entry must be included in the tree even if there is a fully opaque entry above it.
     */
    maintainState(maintainState: IOverlayEntry['maintainState']) {
        this.model.maintainState = maintainState;
        return this;
    }
    /**
     * Whether this entry occludes the entire overlay.
     */
    opaque(opaque: IOverlayEntry['opaque']) {
        this.model.opaque = opaque;
        return this;
    }
    /**
     * Whether this entry should be shown.
     */
    showOverlay(showOverlay: IOverlayEntry['showOverlay']) {
        this.model.showOverlay = showOverlay;
        return this;
    }
}
