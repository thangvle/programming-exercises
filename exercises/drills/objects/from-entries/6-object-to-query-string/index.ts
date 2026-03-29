/**
 * Convert an object to a query string like "a=1&b=2".
 *
 * Use: Object.entries, .map, .join
 *
 * @example toQueryString({a: "1", b: "2"}) → "a=1&b=2"
 * @example toQueryString({name: "Alice"}) → "name=Alice"
 */
export function toQueryString(obj: Record<string, string>): string {
  throw new Error("Not implemented");
}
