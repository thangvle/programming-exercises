/**
 * Given an object with array values, flatten all values into a single array.
 *
 * Use: Object.values(), arr.flat()
 *
 * Examples:
 *   flattenValues({ a: [1, 2], b: [3, 4] })          → [1, 2, 3, 4]
 *   flattenValues({ x: ["hello"], y: ["world"] })     → ["hello", "world"]
 *   flattenValues({ one: [1] })                       → [1]
 *   flattenValues({ a: [1, 2, 3], b: [4] })           → [1, 2, 3, 4]
 */
export function flattenValues<T>(obj: Record<string, T[]>): T[] {
  throw new Error("Not implemented");
}
