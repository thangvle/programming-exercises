import { test, expect, describe } from "bun:test";
import { parseHex } from ".";

describe("parseHex", () => {
  test("parses ff to 255", () => {
    expect(parseHex("ff")).toBe(255);
  });

  test("parses 1a to 26", () => {
    expect(parseHex("1a")).toBe(26);
  });

  test("parses 0 to 0", () => {
    expect(parseHex("0")).toBe(0);
  });

  test("parses 10 to 16", () => {
    expect(parseHex("10")).toBe(16);
  });

  test("parses uppercase FF to 255", () => {
    expect(parseHex("FF")).toBe(255);
  });
});
