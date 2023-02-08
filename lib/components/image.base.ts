import { Image as IImage } from '../component'
import { Component } from './component';

export { IImage }

export class ImageBaseImpl extends Component<IImage> {
    width(width: IImage['width']) {
        this.model.width = width;
        return this;
    }
    height(height: IImage['height']) {
        this.model.height = height;
        return this;
    }
    alignment(alignment: IImage['alignment']) {
        this.model.alignment = alignment;
        return this;
    }
    centerSlice(centerSlice: IImage['centerSlice']) {
        this.model.centerSlice = centerSlice;
        return this;
    }
    errorPlaceholder(errorPlaceholder: IImage['errorPlaceholder']) {
        this.model.errorPlaceholder = errorPlaceholder;
        return this;
    }
    excludeFromSemantics(excludeFromSemantics: IImage['excludeFromSemantics']) {
        this.model.excludeFromSemantics = excludeFromSemantics;
        return this;
    }
    filterQuality(filterQuality: IImage['filterQuality']) {
        this.model.filterQuality = filterQuality;
        return this;
    }
    fit(fit: IImage['fit']) {
        this.model.fit = fit;
        return this;
    }
    framePlaceholder(framePlaceholder: IImage['framePlaceholder']) {
        this.model.framePlaceholder = framePlaceholder;
        return this;
    }
    gaplessPlayback(gaplessPlayback: IImage['gaplessPlayback']) {
        this.model.gaplessPlayback = gaplessPlayback;
        return this;
    }
    isAntiAlias(isAntiAlias: IImage['isAntiAlias']) {
        this.model.isAntiAlias = isAntiAlias;
        return this;
    }
    loadingPlaceholder(loadingPlaceholder: IImage['loadingPlaceholder']) {
        this.model.loadingPlaceholder = loadingPlaceholder;
        return this;
    }
    repeat(repeat: IImage['repeat']) {
        this.model.repeat = repeat;
        return this;
    }
    semanticLabel(semanticLabel: IImage['semanticLabel']) {
        this.model.semanticLabel = semanticLabel;
        return this;
    }
}
