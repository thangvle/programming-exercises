import { test, expect, describe } from "bun:test";
import { parseBinary } from ".";

describe("parseBinary", () => {
  test("parses 1010 to 10", () => {
    expect(parseBinary("1010")).toBe(10);
  });

  test("parses 1111 to 15", () => {
    expect(parseBinary("1111")).toBe(15);
  });

  test("parses 0 to 0", () => {
    expect(parseBinary("0")).toBe(0);
  });

  test("parses 1 to 1", () => {
    expect(parseBinary("1")).toBe(1);
  });

  test("parses 11111111 to 255", () => {
    expect(parseBinary("11111111")).toBe(255);
  });
});
