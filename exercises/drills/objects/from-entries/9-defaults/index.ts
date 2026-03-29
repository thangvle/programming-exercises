/**
 * Merge defaults with overrides. The first object's keys take priority.
 *
 * Use: spread operator, Object.assign
 *
 * @example defaults({a: 1}, {a: 0, b: 2}) → {a: 1, b: 2}
 * @example defaults({}, {a: 1, b: 2}) → {a: 1, b: 2}
 */
export function defaults(
  obj: Record<string, unknown>,
  defaultValues: Record<string, unknown>
): Record<string, unknown> {
  throw new Error("Not implemented");
}
