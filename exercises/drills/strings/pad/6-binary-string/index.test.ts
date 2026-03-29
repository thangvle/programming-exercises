import { test, expect, describe } from "bun:test";
import { toBinary8 } from ".";

describe("toBinary8", () => {
  test("converts 5 to 8-bit binary", () => {
    expect(toBinary8(5)).toBe("00000101");
  });

  test("converts 255 to 8-bit binary", () => {
    expect(toBinary8(255)).toBe("11111111");
  });

  test("converts 0 to 8-bit binary", () => {
    expect(toBinary8(0)).toBe("00000000");
  });

  test("converts 1 to 8-bit binary", () => {
    expect(toBinary8(1)).toBe("00000001");
  });

  test("converts 128 to 8-bit binary", () => {
    expect(toBinary8(128)).toBe("10000000");
  });
});
