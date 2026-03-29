/**
 * Count the occurrences of each value in the array.
 *
 * Use: Array.prototype.reduce
 *
 * @example
 * frequencyCount(["a", "b", "a", "c", "b", "a"]) → { a: 3, b: 2, c: 1 }
 * frequencyCount([1, 1, 2]) → { 1: 2, 2: 1 }
 */
export function frequencyCount<T extends string | number>(
  values: T[]
): Record<string, number> {
  throw new Error("Not implemented");
}
