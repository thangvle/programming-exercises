import { test, expect, describe } from "bun:test";
import { removePrefix } from ".";

describe("removePrefix", () => {
  test("removes prefix when present", () => {
    expect(removePrefix("un_happy", "un_")).toBe("happy");
  });

  test("returns unchanged when prefix not present", () => {
    expect(removePrefix("happy", "un_")).toBe("happy");
  });

  test("removes 'pre_' prefix", () => {
    expect(removePrefix("pre_process", "pre_")).toBe("process");
  });

  test("returns empty string when entire string is the prefix", () => {
    expect(removePrefix("hello", "hello")).toBe("");
  });

  test("does not remove partial matches in the middle", () => {
    expect(removePrefix("not_un_do", "un_")).toBe("not_un_do");
  });
});
