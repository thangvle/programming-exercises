import { test, expect, describe } from "bun:test";
import { checkerboardRow } from ".";

describe("checkerboardRow", () => {
  test("creates even-length alternating row", () => {
    expect(checkerboardRow("X", "O", 6)).toBe("XOXOXO");
  });

  test("creates odd-length alternating row", () => {
    expect(checkerboardRow("A", "B", 5)).toBe("ABABA");
  });

  test("creates row of length 1", () => {
    expect(checkerboardRow("X", "O", 1)).toBe("X");
  });

  test("creates row of length 2", () => {
    expect(checkerboardRow("X", "O", 2)).toBe("XO");
  });

  test("creates empty row for length 0", () => {
    expect(checkerboardRow("X", "O", 0)).toBe("");
  });
});
