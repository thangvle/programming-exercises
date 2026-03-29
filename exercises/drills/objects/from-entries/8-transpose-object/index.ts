/**
 * Transpose an object of arrays into an array of objects.
 * Convert {a: [1, 2], b: [3, 4]} to [{a: 1, b: 3}, {a: 2, b: 4}].
 *
 * Use: Object.keys, Object.entries, .map
 *
 * @example transpose({a: [1, 2], b: [3, 4]}) → [{a: 1, b: 3}, {a: 2, b: 4}]
 * @example transpose({x: [10]}) → [{x: 10}]
 */
export function transpose(
  obj: Record<string, unknown[]>
): Record<string, unknown>[] {
  throw new Error("Not implemented");
}
