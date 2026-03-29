import { test, expect, describe } from "bun:test";
import { stutter } from ".";

describe("stutter", () => {
  test("stutters 'hello'", () => {
    expect(stutter("hello")).toBe("hehehe");
  });

  test("stutters 'world'", () => {
    expect(stutter("world")).toBe("wowowo");
  });

  test("stutters 'ab'", () => {
    expect(stutter("ab")).toBe("ababab");
  });

  test("stutters 'test'", () => {
    expect(stutter("test")).toBe("tetete");
  });

  test("stutters 'go'", () => {
    expect(stutter("go")).toBe("gogogo");
  });
});
