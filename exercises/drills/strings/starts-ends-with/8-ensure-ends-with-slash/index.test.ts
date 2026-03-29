import { test, expect, describe } from "bun:test";
import { ensureSlash } from ".";

describe("ensureSlash", () => {
  test("adds slash when missing", () => {
    expect(ensureSlash("/path")).toBe("/path/");
  });

  test("does not add slash when already present", () => {
    expect(ensureSlash("/path/")).toBe("/path/");
  });

  test("adds slash to empty string", () => {
    expect(ensureSlash("")).toBe("/");
  });

  test("works with nested paths", () => {
    expect(ensureSlash("/a/b/c")).toBe("/a/b/c/");
  });

  test("does not double slash", () => {
    expect(ensureSlash("folder/")).toBe("folder/");
  });
});
