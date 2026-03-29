/**
 * Pick specific keys from an object, returning a new object.
 *
 * Use: Object.entries, .filter, Object.fromEntries
 *
 * @example pickKeys({a: 1, b: 2, c: 3}, ["a", "c"]) → {a: 1, c: 3}
 * @example pickKeys({a: 1, b: 2}, ["a"]) → {a: 1}
 */
export function pickKeys(
  obj: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  throw new Error("Not implemented");
}
