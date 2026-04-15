/**
 * Count the number of truthy values in the array.
 *
 * Use: Array.prototype.reduce
 *
 * @example
 * countTruthy([0, "", 1, "hi", null]) → 2
 * countTruthy([1, 2, 3]) → 3
 */
export function countTruthy(values: unknown[]): number {
<<<<<<< HEAD
  if (values.length === 0) return 0;
  return values.reduce((acc, curr) => {
    return acc + (curr ? 1 : 0);
  }, 0);
=======
  throw new Error("Not implemented");
>>>>>>> b831d0f6cf15394c5ca1ab579c252339804c412f
}
