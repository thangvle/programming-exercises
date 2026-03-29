import { test, expect, describe } from "bun:test";
import { toHtmlList } from "./index";

describe("toHtmlList", () => {
  test("wraps two items", () => {
    expect(toHtmlList(["a", "b"])).toBe("<li>a</li><li>b</li>");
  });

  test("wraps a single item", () => {
    expect(toHtmlList(["hello"])).toBe("<li>hello</li>");
  });

  test("wraps three items", () => {
    expect(toHtmlList(["x", "y", "z"])).toBe("<li>x</li><li>y</li><li>z</li>");
  });

  test("wraps two words", () => {
    expect(toHtmlList(["one", "two"])).toBe("<li>one</li><li>two</li>");
  });

  test("returns empty string for empty array", () => {
    expect(toHtmlList([])).toBe("");
  });
});
