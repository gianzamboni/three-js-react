import { Random } from "~/utils/random";

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
    xLeft: Random.number(0, 0.005) * (boundingBox?.width ?? 1),
    yTop: Random.number(0, 0.005) * (boundingBox?.height ?? 1),
    xRight: Random.number(0.99, 0.995) * (boundingBox?.width ?? 1),
    yBottom: Random.number(0.99, 0.995) * (boundingBox?.height ?? 1),
    xOffset: 0.01 * (boundingBox?.width ?? 1),
    yOffset: 0.005 * (boundingBox?.height ?? 1),
  }
}