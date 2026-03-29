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
  if (values.length === 0) return 0;
  return values.reduce((acc, curr) => {
    return acc + (curr ? 1 : 0);
  }, 0);
}
