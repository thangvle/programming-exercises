/**
 * Rename keys of an object using a mapping.
 *
 * Use: Object.entries, .map, Object.fromEntries
 *
 * @example renameKeys({name: "A", age: 20}, {name: "fullName", age: "years"}) → {fullName: "A", years: 20}
 * @example renameKeys({a: 1}, {}) → {a: 1}
 */
export function renameKeys(
  obj: Record<string, unknown>,
  keyMap: Record<string, string>
): Record<string, unknown> {
  throw new Error("Not implemented");
}
