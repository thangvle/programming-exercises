/**
 * Join only truthy values with a given separator.
 *
 * Use: arr.filter(), arr.join()
 *
 * Examples:
 *   joinTruthy(["hi", "", null, "bye"], " ")       → "hi bye"
 *   joinTruthy([0, 1, 2, null, 3], ",")            → "1,2,3"
 *   joinTruthy(["a", false, "b", undefined], "-")  → "a-b"
 *   joinTruthy(["hello", "world"], " ")             → "hello world"
 */
export function joinTruthy(values: unknown[], separator: string): string {
  throw new Error("Not implemented");
}
