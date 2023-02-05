import * as common from "./common";
import { BorderRadius, RadiusType } from "./component";

export function all(value: number | RadiusType): BorderRadius {
  if (typeof value === "number")
    value = {
      x: value,
      y: value,
    };
  return {
    topLeft: value,
    topRight: value,
    bottomRight: value,
    bottomLeft: value,
  };
}
