import { Carousel as ICarousel } from '../component'
import { Component } from './component';

export { ICarousel }

export class CarouselBaseImpl extends Component<ICarousel> {
    options(options: ICarousel['options']) {
        this.model.options = options;
        return this;
    }
}
