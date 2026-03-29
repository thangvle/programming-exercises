import { mapValues } from "../../../objects/keys-values-entries/9-map-values";

/**
 * Group strings by their length.
 *
 * Use: Array.prototype.reduce
 *
 * @example
 * groupByLength(["hi", "hey", "hello", "ok"]) → { 2: ["hi", "ok"], 3: ["hey"], 5: ["hello"] }
 * groupByLength(["a", "b"]) → { 1: ["a", "b"] }
 */
export function groupByLength(strings: string[]): Record<number, string[]> {
  if (strings.length === 0) return {};
  let group = strings.reduce(
    (acc, curr) => {
      let stringLength = curr.length;
      if (!acc[stringLength]) acc[stringLength] = [];
      // acc[stringLength] = acc[stringLength] || [];
      acc[stringLength].push(curr);
      return acc;
    },
    {} as Record<number, string[]>,
  );
  return group;
}
