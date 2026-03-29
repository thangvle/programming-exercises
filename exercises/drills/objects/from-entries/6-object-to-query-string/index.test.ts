import { test, expect, describe } from "bun:test";
import { toQueryString } from ".";

describe("toQueryString", () => {
  test("converts two properties to query string", () => {
    expect(toQueryString({ a: "1", b: "2" })).toBe("a=1&b=2");
  });

  test("converts single property", () => {
    expect(toQueryString({ name: "Alice" })).toBe("name=Alice");
  });

  test("converts empty object to empty string", () => {
    expect(toQueryString({})).toBe("");
  });

  test("converts three properties", () => {
    expect(toQueryString({ x: "10", y: "20", z: "30" })).toBe("x=10&y=20&z=30");
  });

  test("handles empty value", () => {
    expect(toQueryString({ key: "" })).toBe("key=");
  });
});
