/**
 * Return a new object without the specified keys.
 *
 * Use: Object.entries, .filter, Object.fromEntries
 *
 * @example omitKeys({a: 1, b: 2, c: 3, d: 4}, ["b", "d"]) → {a: 1, c: 3}
 * @example omitKeys({a: 1}, ["a"]) → {}
 */
export function omitKeys(
  obj: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  throw new Error("Not implemented");
}
