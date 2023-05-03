import { Image as IImage } from '../component'
import { Component } from './component';

export { IImage }

export class ImageBaseImpl extends Component<IImage> {
    /**
     * The image width.
     */
    width(width: IImage['width']) {
        this.model.width = width;
        return this;
    }
    /**
     * The image height.
     */
    height(height: IImage['height']) {
        this.model.height = height;
        return this;
    }
    /**
     * How to align the image.
     */
    alignment(alignment: IImage['alignment']) {
        this.model.alignment = alignment;
        return this;
    }
    /**
     * The center slice for a nine-patch image.
     */
    centerSlice(centerSlice: IImage['centerSlice']) {
        this.model.centerSlice = centerSlice;
        return this;
    }
    /**
     * The error placeholder when the image encounters an error during loading.
     */
    errorPlaceholder(errorPlaceholder: IImage['errorPlaceholder']) {
        this.model.errorPlaceholder = errorPlaceholder;
        return this;
    }
    /**
     * Whether to exclude this image from semantics.
     */
    excludeFromSemantics(excludeFromSemantics: IImage['excludeFromSemantics']) {
        this.model.excludeFromSemantics = excludeFromSemantics;
        return this;
    }
    /**
     * The quality of the image.
     */
    filterQuality(filterQuality: IImage['filterQuality']) {
        this.model.filterQuality = filterQuality;
        return this;
    }
    /**
     * How the image should fit the parent box.
     */
    fit(fit: IImage['fit']) {
        this.model.fit = fit;
        return this;
    }
    /**
     * A placeholder to display while the image is loading or to add effects to the image.
     */
    framePlaceholder(framePlaceholder: IImage['framePlaceholder']) {
        this.model.framePlaceholder = framePlaceholder;
        return this;
    }
    /**
     * Whether the old image (true) or nothing (false) is shown when the image provider changes.
     */
    gaplessPlayback(gaplessPlayback: IImage['gaplessPlayback']) {
        this.model.gaplessPlayback = gaplessPlayback;
        return this;
    }
    /**
     * Whether to paint the image with anti-aliasing.
     */
    isAntiAlias(isAntiAlias: IImage['isAntiAlias']) {
        this.model.isAntiAlias = isAntiAlias;
        return this;
    }
    /**
     * A placeholder to display while the image is still loading.
     */
    loadingPlaceholder(loadingPlaceholder: IImage['loadingPlaceholder']) {
        this.model.loadingPlaceholder = loadingPlaceholder;
        return this;
    }
    /**
     * How the image should be repeated accross the bounds not covered by the image.
     */
    repeat(repeat: IImage['repeat']) {
        this.model.repeat = repeat;
        return this;
    }
    /**
     * A semantic description of the image. This is used for TalkBack on Android and VoiceOver on IOS.
     */
    semanticLabel(semanticLabel: IImage['semanticLabel']) {
        this.model.semanticLabel = semanticLabel;
        return this;
    }
}
