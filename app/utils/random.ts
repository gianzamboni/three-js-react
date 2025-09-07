export function randomBoolean() {
  return Math.random() < 0.5;
}

export function randomSelection<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function randomizedOffset(base: number, offset: number) {
  return base + getRandomNumber(-offset, offset);
}

export function randomizedOffset2D(base: [number, number], offset: [number, number]): [number, number] {
  return [randomizedOffset(base[0], offset[0]), randomizedOffset(base[1], offset[1])];
}