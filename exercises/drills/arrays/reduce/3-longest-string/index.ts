/**
 * Find the longest string in the array.
 *
 * Use: Array.prototype.reduce
 *
 * @example
 * longest(["hi", "hello", "hey"]) → "hello"
 * longest(["a", "bb"]) → "bb"
 */
export function longest(strings: string[]): string {
<<<<<<< HEAD
  if (strings.length === 0) return strings[0] as string;

  // TODO: go through the list, and compare the length
  // get longest one
  return strings.reduce((acc, curr) => {
    if (curr.length > acc.length) return curr;
    else return acc;
  });
=======
  throw new Error("Not implemented");
>>>>>>> b831d0f6cf15394c5ca1ab579c252339804c412f
}
