import { IStatusSticker, StatusStickerBaseImpl } from './statusSticker.base'

export { IStatusSticker }

export function StatusSticker(status: IStatusSticker['status']): StatusStickerImpl {
  return new StatusStickerImpl({
      type: "statusSticker",
      status: status,
  });
}

export class StatusStickerImpl extends StatusStickerBaseImpl {
  // Add here custom implementations
}
