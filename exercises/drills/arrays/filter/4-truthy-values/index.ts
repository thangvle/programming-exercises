/**
 * Remove all falsy values from the array.
 *
 * Use: Array.prototype.filter
 *
 * @example
 * truthyValues([0, "", null, "hi", 1, undefined]) → ["hi", 1]
 * truthyValues([false, 0, ""]) → []
 */
export function truthyValues(values: unknown[]): unknown[] {
  let result = values.filter(
    (i) => i !== null || i !== undefined || i.length > 0,
  );
  return result;
}
