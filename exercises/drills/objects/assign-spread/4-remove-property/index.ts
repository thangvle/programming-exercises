/**
 * Return a new object without a specified property.
 *
 * Use: destructuring with rest, or Object.entries + filter
 *
 * @example removeProperty({a: 1, b: 2, c: 3}, "b") → {a: 1, c: 3}
 * @example removeProperty({x: 10}, "x") → {}
 */
export function removeProperty(
  obj: Record<string, unknown>,
  key: string
): Record<string, unknown> {
  throw new Error("Not implemented");
}
