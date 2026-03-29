/**
 * Parse a query string like "a=1&b=2" into an object.
 *
 * Use: .split, .map, Object.fromEntries
 *
 * @example parseQuery("a=1&b=2") → {a: "1", b: "2"}
 * @example parseQuery("name=Alice") → {name: "Alice"}
 */
export function parseQuery(query: string): Record<string, string> {
  throw new Error("Not implemented");
}
