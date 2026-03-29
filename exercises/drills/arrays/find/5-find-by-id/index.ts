/**
 * Find an object by its id property.
 *
 * Use: Array.prototype.find
 *
 * @example
 * findById([{ id: 1, name: "A" }, { id: 2, name: "B" }], 2) → { id: 2, name: "B" }
 * findById([{ id: 1, name: "A" }], 5) → undefined
 */
export function findById(
  items: { id: number; name: string }[],
  id: number
): { id: number; name: string } | undefined {
  throw new Error("Not implemented");
}
