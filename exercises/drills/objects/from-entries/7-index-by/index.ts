/**
 * Index an array of objects by a specified key.
 *
 * Use: .reduce or Object.fromEntries with .map
 *
 * @example indexBy([{id: 1, name: "A"}, {id: 2, name: "B"}], "id") → {1: {id: 1, name: "A"}, 2: {id: 2, name: "B"}}
 * @example indexBy([], "id") → {}
 */
export function indexBy(
  items: Record<string, unknown>[],
  key: string
): Record<string, Record<string, unknown>> {
  throw new Error("Not implemented");
}
