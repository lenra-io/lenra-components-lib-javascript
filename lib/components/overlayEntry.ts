import { Component1 } from '../component';
import { Component } from './component';
import { IOverlayEntry, OverlayEntryBaseImpl } from './overlayEntry.base'

export { IOverlayEntry }

export function OverlayEntry<T extends Component1>(child: Component<T> | T): OverlayEntryImpl {
  return new OverlayEntryImpl({
      type: "overlayEntry",
      child: Component.normalize(child),
  });
}

export class OverlayEntryImpl extends OverlayEntryBaseImpl {
  // Add here custom implementations
}
