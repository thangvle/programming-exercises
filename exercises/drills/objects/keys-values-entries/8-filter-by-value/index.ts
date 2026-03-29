/**
 * Keep only entries where the value passes a test function.
 *
 * Use: Object.entries, .filter, Object.fromEntries
 *
 * @example filterByValue({a: 1, b: 10, c: 5}, (v: number) => v > 3) → {b: 10, c: 5}
 * @example filterByValue({a: 1, b: 2}, (v: number) => v > 10) → {}
 */
export function filterByValue(
  obj: Record<string, number>,
  fn: (value: number) => boolean
): Record<string, number> {
  throw new Error("Not implemented");
}
