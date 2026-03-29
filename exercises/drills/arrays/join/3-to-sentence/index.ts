/**
 * Join an array as an English sentence with "and" before the last item.
 * For 1 item, return just that item. For 2 items, join with " and ".
 * For 3+, join with ", " and ", and " before the last.
 *
 * Use: arr.slice(), arr.join()
 *
 * Examples:
 *   toSentence(["apples", "bananas", "cherries"])  → "apples, bananas, and cherries"
 *   toSentence(["cats", "dogs"])                   → "cats and dogs"
 *   toSentence(["hello"])                          → "hello"
 *   toSentence(["a", "b", "c", "d"])               → "a, b, c, and d"
 */
export function toSentence(strs: string[]): string {
  throw new Error("Not implemented");
}
