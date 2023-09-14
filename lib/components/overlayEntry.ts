import { LenraComponent } from '../component';
import { Component } from './component';
import { IOverlayEntry, OverlayEntryBaseImpl } from './overlayEntry.base'

export { IOverlayEntry }

export function OverlayEntry<T extends LenraComponent>(child: Component<T> | T): OverlayEntryImpl {
  return new OverlayEntryImpl({
      _type: "overlayEntry",
      child: Component.normalize(child),
  });
}

export class OverlayEntryImpl extends OverlayEntryBaseImpl {
  // Add here custom implementations
}
