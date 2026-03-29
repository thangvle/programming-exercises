/**
 * Keep words that are longer than n characters.
 *
 * Use: Array.prototype.filter
 *
 * @example
 * longWords(["hi", "hello", "hey"], 2) → ["hello", "hey"]
 * longWords(["a", "bb", "ccc"], 1) → ["bb", "ccc"]
 */
export function longWords(words: string[], n: number): string[] {
  let result = words.filter((w) => w.length > n);

  return result;
}
