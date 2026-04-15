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
<<<<<<< HEAD
  let result = values.filter(
    (i) => i !== null || i !== undefined || i.length > 0,
  );
  return result;
=======
  throw new Error("Not implemented");
>>>>>>> b831d0f6cf15394c5ca1ab579c252339804c412f
}
