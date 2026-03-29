/**
 * Return a new object with one property updated.
 *
 * Use: spread operator with computed property
 *
 * @example updateProperty({name: "A", age: 20}, "age", 21) → {name: "A", age: 21}
 * @example updateProperty({x: 1}, "x", 99) → {x: 99}
 */
export function updateProperty(
  obj: Record<string, unknown>,
  key: string,
  value: unknown
): Record<string, unknown> {
  throw new Error("Not implemented");
}
