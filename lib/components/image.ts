import { Component } from './component';
import { IImage, ImageBaseImpl } from './image.base'

export { IImage }

export function Image(src: IImage['src']): ImageImpl {
  return new ImageImpl({
    _type: "image",
    src: src,
  });
}

export class ImageImpl extends ImageBaseImpl {
  errorPlaceholder<T extends IImage['errorPlaceholder']>(errorPlaceholder: Component<T> | T) {
    this.model.errorPlaceholder = Component.normalize(errorPlaceholder);
    return this;
  }
  framePlaceholder<T extends IImage['framePlaceholder']>(framePlaceholder: Component<T> | T) {
    this.model.framePlaceholder = Component.normalize(framePlaceholder);
    return this;
  }
  loadingPlaceholder<T extends IImage['loadingPlaceholder']>(loadingPlaceholder: Component<T> | T) {
    this.model.loadingPlaceholder = Component.normalize(loadingPlaceholder);
    return this;
  }
}
