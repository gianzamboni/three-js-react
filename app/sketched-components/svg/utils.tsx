import { getRandomNumber } from "~/utils/random";

export function generateRectangleLimits(boundingBox: DOMRect | null) {
  return {
    xLeft: getRandomNumber(0.01, 0.015) * (boundingBox?.width ?? 1),
    yTop: getRandomNumber(0.01, 0.015) * (boundingBox?.height ?? 1),
    xRight: getRandomNumber(0.98, 1) * (boundingBox?.width ?? 1),
    yBottom: getRandomNumber(0.98, 1) * (boundingBox?.height ?? 1),
    xOffset: 0.01 * (boundingBox?.width ?? 1),
    yOffset: 0.005 * (boundingBox?.height ?? 1),
  }
}