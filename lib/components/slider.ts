import { ISlider, SliderBaseImpl } from './slider.base'

export { ISlider }

export function Slider(): SliderImpl {
  return new SliderImpl({
    type: "slider",

  });
}

export class SliderImpl extends SliderBaseImpl {
  // Add here custom implementations
}
