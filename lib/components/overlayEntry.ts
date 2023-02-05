import { OverlayEntry as IOverlayEntry } from "../component";
import { Component } from "./component";
export { IOverlayEntry };

export class OverlayEntry extends Component<IOverlayEntry> {
  maintainState(maintainState) {
    this.model.maintainState = maintainState;
    return this;
  }
  opaque(opaque) {
    this.model.opaque = opaque;
    return this;
  }
  showOverlay(showOverlay) {
    this.model.showOverlay = showOverlay;
    return this;
  }

  static new(child): OverlayEntry {
    return new OverlayEntry({
      type: "overlayEntry",
      child: Component.normalize(child),
    });
  }
}
