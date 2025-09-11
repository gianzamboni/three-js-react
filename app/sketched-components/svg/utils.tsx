import { getRandomNumber } from "~/utils/random";

export type RectangleLimits = {
  xLeft: number;
  yTop: number;
  xRight: number;
  yBottom: number;
  xOffset: number;
  yOffset: number;
}
export function generateRectangleLimits(boundingBox: DOMRect | null): RectangleLimits {
  return {
    xLeft: getRandomNumber(0.00, 0.005) * (boundingBox?.width ?? 1),
    yTop: getRandomNumber(0.00, 0.005) * (boundingBox?.height ?? 1),
    xRight: getRandomNumber(0.99, 0.995) * (boundingBox?.width ?? 1),
    yBottom: getRandomNumber(0.99, 0.995) * (boundingBox?.height ?? 1),
    xOffset: 0.01 * (boundingBox?.width ?? 1),
    yOffset: 0.005 * (boundingBox?.height ?? 1),
  }
}