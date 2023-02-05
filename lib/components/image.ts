import { Alignment1, BoxFit, Component2, FilterQuality, Image as IImage, ImageRepeat, Rect } from "../component";
import { Component } from "./component";
export { IImage };

export class Image extends Component<IImage> {
  width(width: number) {
    this.model.width = width;
    return this;
  }
  height(height: number) {
    this.model.height = height;
    return this;
  }
  alignment(alignment: Alignment1) {
    this.model.alignment = alignment;
    return this;
  }
  centerSlice(centerSlice: Rect) {
    this.model.centerSlice = centerSlice;
    return this;
  }
  errorPlaceholder<T extends Component2>(errorPlaceholder: Component<T> | T) {
    this.model.errorPlaceholder = Component.normalize(errorPlaceholder);
    return this;
  }
  excludeFromSemantics(excludeFromSemantics: boolean) {
    this.model.excludeFromSemantics = excludeFromSemantics;
    return this;
  }
  filterQuality(filterQuality: FilterQuality) {
    this.model.filterQuality = filterQuality;
    return this;
  }
  fit(fit: BoxFit) {
    this.model.fit = fit;
    return this;
  }
  framePlaceholder<T extends Component2>(framePlaceholder: Component<T> | T) {
    this.model.framePlaceholder = Component.normalize(framePlaceholder);
    return this;
  }
  gaplessPlayback(gaplessPlayback: boolean) {
    this.model.gaplessPlayback = gaplessPlayback;
    return this;
  }
  isAntiAlias(isAntiAlias: boolean) {
    this.model.isAntiAlias = isAntiAlias;
    return this;
  }
  loadingPlaceholder<T extends Component2>(loadingPlaceholder: Component<T> | T) {
    this.model.loadingPlaceholder = Component.normalize(loadingPlaceholder);
    return this;
  }
  repeat(repeat: ImageRepeat) {
    this.model.repeat = repeat;
    return this;
  }
  semanticLabel(semanticLabel: string) {
    this.model.semanticLabel = semanticLabel;
    return this;
  }

  static new(src: string): Image {
    return new Image({
      type: "image",
      src: src,
    });
  }
}
