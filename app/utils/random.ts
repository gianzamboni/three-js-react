export namespace Random {
  export function number(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }
  
  export function offset(base: number, offset: number) {
    return base + number(-offset, offset);
  }
  
  export function offset2D(base: [number, number], offsetValues: [number, number]): [number, number] {
    return [offset(base[0], offsetValues[0]), offset(base[1], offsetValues[1])];
  }

  export function choice<T>(array: T[]): T {
    return array[Math.round(number(0, array.length - 1))];
  }
}

