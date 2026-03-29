/**
 * Apply a function to each value of an object, returning a new object.
 *
 * Use: Object.entries, .map, Object.fromEntries
 *
 * @example mapValues({a: 1, b: 2}, (v: number) => v * 2) → {a: 2, b: 4}
 * @example mapValues({x: 5}, (v: number) => v + 1) → {x: 6}
 */
export function mapValues(
  obj: Record<string, number>,
  fn: (value: number) => number
): Record<string, number> {
  throw new Error("Not implemented");
}
