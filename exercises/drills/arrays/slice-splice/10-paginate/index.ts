/**
 * Return a page of results given page number (1-based) and page size.
 *
 * Use: arr.slice()
 *
 * Examples:
 *   paginate([1,2,3,4,5,6,7,8,9,10], 2, 3)  → [4, 5, 6]
 *   paginate([1,2,3,4,5], 1, 2)              → [1, 2]
 *   paginate([1,2,3,4,5], 3, 2)              → [5]
 *   paginate([1,2,3], 2, 5)                  → []
 */
export function paginate<T>(arr: T[], page: number, pageSize: number): T[] {
  throw new Error("Not implemented");
}
