export const Colors = {
  white: 0xffffffff,
  black: 0xff000000,
  transparentMask: 0x00ffffff,
};

export const LenraColors = {
  bluePulse: 0xff19acea,
  greenPulse: 0xff389589,
  yellowPulse: 0xffef902c,
  redPulse: 0xffe92236,
};

/**
 * Calculate the luminance of a given color
 * @param color The color
 * @returns The luminance value between 0 (for black) and 1 (for white)
 */
export function luminance(color: number) {
  if (color === undefined || color === null)
    throw new Error("The color is undefined");
  const colorBI = BigInt(color);
  const r = Number((colorBI & BigInt(0xff0000)) >> BigInt(16)) / 255,
    g = Number((colorBI & BigInt(0xff00)) >> BigInt(8)) / 255,
    b = Number(colorBI & BigInt(0xff)) / 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function betterContrast(color: number, ...comparedColors: number[]) {
  if (comparedColors.length == 1) {
    console.warn(
      "It was easy to find the best contrast since there is only color to compare"
    );
    return comparedColors[0];
  }
  const luminanceForRatio = luminance(color) + 0.05;
  if (comparedColors.length == 0) {
    // Specific black and white case
    let blackRatio = luminanceForRatio / 0.05;
    let whiteRatio = luminanceForRatio / 1.05;
    if (blackRatio < 1) blackRatio = 1 / blackRatio;
    if (whiteRatio < 1) whiteRatio = 1 / whiteRatio;
    return blackRatio > whiteRatio ? Colors.black : Colors.white;
  }

  const sortedColors = comparedColors
    .map((c) => {
      let ratio = luminanceForRatio / (luminance(c) + 0.05);

      if (ratio < 1) ratio = 1 / ratio;
      return {
        color: c,
        ratio,
      };
    })
    .sort((a, b) => b.ratio - a.ratio);
  return sortedColors[0].color;
}

export function opacity(color: number, a: number) {
  let ret = Math.max(0, Math.min(Colors.white, Math.round(a * Colors.white)));
  let mask = ret & Colors.transparentMask;
  ret -= mask;
  ret += color & Colors.transparentMask;
  return ret;
}
export function fromHex(colorHex: string) {
  if (!colorHex || !/^#[a-fA-F0-9]{6}$/.test(colorHex)) return undefined;
  return parseInt(colorHex.substring(1), 16) | 0xff000000;
}
export function toHex(color: number) {
  if (!Number.isInteger(color)) return undefined;
  let hex = (0x00ffffff & color).toString(16);
  while (hex.length < 6) hex = "0" + hex;
  return "#" + hex;
}
