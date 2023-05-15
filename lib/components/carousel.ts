import { ICarousel, CarouselBaseImpl } from './carousel.base'

export { ICarousel }

export function Carousel(children: ICarousel['children']): CarouselImpl {
  return new CarouselImpl({
    type: "carousel",
    children: children,
  });
}

export class CarouselImpl extends CarouselBaseImpl {
  // Add here custom implementations
}
