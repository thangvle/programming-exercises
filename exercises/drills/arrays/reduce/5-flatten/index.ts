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
<<<<<<< HEAD
  if (arrays.length === 0) return [];
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  });
=======
  throw new Error("Not implemented");
>>>>>>> b831d0f6cf15394c5ca1ab579c252339804c412f
}
