/**
 * Capitalize the first letter of a string, rest lowercase.
 *
 * Use: str.toUpperCase(), str.toLowerCase()
 *
 * @example
 * capitalizeFirst("hELLO") // → "Hello"
 * capitalizeFirst("world") // → "World"
 */
export function capitalizeFirst(str: string): string {
  if (str.length === 0) return "";
  return `${str.at(0)?.toUpperCase() as string}${str.slice(1, str.length).toLowerCase()}`;
}
