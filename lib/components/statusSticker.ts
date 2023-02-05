import { StatusSticker as IStatusSticker } from "../component";
import { Component } from "./component";
export { IStatusSticker };

export class StatusSticker extends Component<IStatusSticker> {
  static new(status): StatusSticker {
    return new StatusSticker({
      type: "statusSticker",
      status: status,
    });
  }
}
