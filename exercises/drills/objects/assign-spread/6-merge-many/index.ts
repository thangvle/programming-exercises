/**
 * Merge an array of objects into a single object.
 *
 * Use: Object.assign with spread, or .reduce with spread
 *
 * @example mergeMany([{a: 1}, {b: 2}, {c: 3}]) → {a: 1, b: 2, c: 3}
 * @example mergeMany([]) → {}
 */
export function mergeMany(objects: Record<string, unknown>[]): Record<string, unknown> {
  throw new Error("Not implemented");
}
