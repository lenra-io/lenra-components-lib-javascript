import { Component1, OverlayEntry as IOverlayEntry } from "../component";
import { Component } from "./component";
export { IOverlayEntry };

export class OverlayEntry extends Component<IOverlayEntry> {
  maintainState(maintainState: boolean) {
    this.model.maintainState = maintainState;
    return this;
  }
  opaque(opaque: boolean) {
    this.model.opaque = opaque;
    return this;
  }
  showOverlay(showOverlay: boolean) {
    this.model.showOverlay = showOverlay;
    return this;
  }

  static new<T extends Component1>(child: Component<T> | T): OverlayEntry {
    return new OverlayEntry({
      type: "overlayEntry",
      child: Component.normalize(child),
    });
  }
}
