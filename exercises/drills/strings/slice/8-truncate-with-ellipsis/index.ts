/**
 * If the string is longer than `maxLength`, truncate it and add "..." at the end.
 * The total length of the returned string (including the "...") must not exceed `maxLength`.
 * If the string is already `maxLength` or shorter, return it unchanged.
 *
 * Use: str.slice()
 *
 * Examples:
 *   truncate("hello world", 8)  → "hello..."   (5 chars + "..." = 8)
 *   truncate("hi", 5)           → "hi"          (already short enough)
 *   truncate("hello", 5)        → "hello"       (exactly maxLength)
 *   truncate("abcdefgh", 5)     → "ab..."       (2 chars + "..." = 5)
 */
export function truncate(str: string, maxLength: number): string {
  throw new Error("Not implemented");
}
