export function randomBoolean() {
  return Math.random() < 0.5;
}

export function randomSelection<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
