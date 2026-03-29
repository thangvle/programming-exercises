/**
 * Merge defaults with user config (user config wins for overlapping keys).
 *
 * Use: spread operator
 *
 * @example overrideDefaults({color: "red", size: 10}, {color: "blue"}) → {color: "blue", size: 10}
 * @example overrideDefaults({a: 1}, {}) → {a: 1}
 */
export function overrideDefaults(
  defaults: Record<string, unknown>,
  overrides: Record<string, unknown>
): Record<string, unknown> {
  throw new Error("Not implemented");
}
