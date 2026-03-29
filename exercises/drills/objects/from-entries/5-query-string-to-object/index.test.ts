import { test, expect, describe } from "bun:test";
import { parseQuery } from ".";

describe("parseQuery", () => {
  test("parses two key-value pairs", () => {
    expect(parseQuery("a=1&b=2")).toEqual({ a: "1", b: "2" });
  });

  test("parses single key-value pair", () => {
    expect(parseQuery("name=Alice")).toEqual({ name: "Alice" });
  });

  test("parses three pairs", () => {
    expect(parseQuery("x=10&y=20&z=30")).toEqual({ x: "10", y: "20", z: "30" });
  });

  test("parses pairs with string values", () => {
    expect(parseQuery("color=red&size=large")).toEqual({ color: "red", size: "large" });
  });

  test("parses pair with empty value", () => {
    expect(parseQuery("key=")).toEqual({ key: "" });
  });
});
