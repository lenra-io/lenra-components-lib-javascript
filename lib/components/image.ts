import { Image as IImage } from "../component";
import { Component } from "./component";
export { IImage };

export class Image extends Component<IImage> {
  width(width) {
    this.model.width = width;
    return this;
  }
  height(height) {
    this.model.height = height;
    return this;
  }
  alignment(alignment) {
    this.model.alignment = alignment;
    return this;
  }
  centerSlice(centerSlice) {
    this.model.centerSlice = centerSlice;
    return this;
  }
  errorPlaceholder(errorPlaceholder) {
    this.model.errorPlaceholder = errorPlaceholder;
    return this;
  }
  excludeFromSemantics(excludeFromSemantics) {
    this.model.excludeFromSemantics = excludeFromSemantics;
    return this;
  }
  filterQuality(filterQuality) {
    this.model.filterQuality = filterQuality;
    return this;
  }
  fit(fit) {
    this.model.fit = fit;
    return this;
  }
  framePlaceholder(framePlaceholder) {
    this.model.framePlaceholder = framePlaceholder;
    return this;
  }
  gaplessPlayback(gaplessPlayback) {
    this.model.gaplessPlayback = gaplessPlayback;
    return this;
  }
  isAntiAlias(isAntiAlias) {
    this.model.isAntiAlias = isAntiAlias;
    return this;
  }
  loadingPlaceholder(loadingPlaceholder) {
    this.model.loadingPlaceholder = loadingPlaceholder;
    return this;
  }
  repeat(repeat) {
    this.model.repeat = repeat;
    return this;
  }
  semanticLabel(semanticLabel) {
    this.model.semanticLabel = semanticLabel;
    return this;
  }

  static new(src): Image {
    return new Image({
      type: "image",
      src: src,
    });
  }
}
