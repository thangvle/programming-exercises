import { test, expect, describe } from "bun:test";
import { padHex } from ".";

describe("padHex", () => {
  test("pads single character hex", () => {
    expect(padHex("f")).toBe("0f");
  });

  test("keeps two character hex", () => {
    expect(padHex("ff")).toBe("ff");
  });

  test("pads '0' to '00'", () => {
    expect(padHex("0")).toBe("00");
  });

  test("pads 'a' to '0a'", () => {
    expect(padHex("a")).toBe("0a");
  });

  test("keeps 'ab' as-is", () => {
    expect(padHex("ab")).toBe("ab");
  });
});
