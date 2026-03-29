/**
 * Recursively merge nested objects.
 *
 * Use: spread operator, recursion, typeof checks
 *
 * @example deepMerge({a: {b: 1, c: 2}}, {a: {c: 3, d: 4}}) → {a: {b: 1, c: 3, d: 4}}
 * @example deepMerge({a: 1}, {b: 2}) → {a: 1, b: 2}
 */
export function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  throw new Error("Not implemented");
}
