import { test, expect, describe } from "bun:test";
import { digitWords } from "./index";

describe("digitWords", () => {
  test("converts 123", () => {
    expect(digitWords(123)).toBe("one two three");
  });

  test("converts 405 with zero", () => {
    expect(digitWords(405)).toBe("four zero five");
  });

  test("converts single digit", () => {
    expect(digitWords(7)).toBe("seven");
  });

  test("converts 90", () => {
    expect(digitWords(90)).toBe("nine zero");
  });

  test("converts 0", () => {
    expect(digitWords(0)).toBe("zero");
  });
});
