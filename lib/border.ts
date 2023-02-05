import * as common from "./common";
import { Border, BorderSide } from "./component";

export const all = (value: BorderSide): Border => common.all(value);
export const symmetric = (
  horizontal: BorderSide,
  vertical: BorderSide
): Border => common.symmetric(horizontal, vertical);
