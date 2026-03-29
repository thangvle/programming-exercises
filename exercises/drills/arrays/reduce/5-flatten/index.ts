/**
 * Flatten an array of arrays into a single array.
 *
 * Use: Array.prototype.reduce
 *
 * @example
 * flatten([[1, 2], [3, 4], [5]]) → [1, 2, 3, 4, 5]
 * flatten([["a"], ["b", "c"]]) → ["a", "b", "c"]
 */
export function flatten<T>(arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  });
}
