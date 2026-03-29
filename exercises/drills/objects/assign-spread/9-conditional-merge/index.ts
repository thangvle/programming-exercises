/**
 * Merge second object into first only if condition is true.
 *
 * Use: spread operator with conditional
 *
 * @example conditionalMerge({a: 1}, {b: 2}, true) → {a: 1, b: 2}
 * @example conditionalMerge({a: 1}, {b: 2}, false) → {a: 1}
 */
export function conditionalMerge(
  base: Record<string, unknown>,
  extra: Record<string, unknown>,
  condition: boolean
): Record<string, unknown> {
  throw new Error("Not implemented");
}
