import { test, expect, describe } from "bun:test";
import { joinWithDash } from "./index";

describe("joinWithDash", () => {
  test("joins two words", () => {
    expect(joinWithDash("hello world")).toBe("hello-world");
  });

  test("joins three words", () => {
    expect(joinWithDash("one two three")).toBe("one-two-three");
  });

  test("single word stays the same", () => {
    expect(joinWithDash("hello")).toBe("hello");
  });

  test("joins a slug-like phrase", () => {
    expect(joinWithDash("my blog post")).toBe("my-blog-post");
  });

  test("joins four words", () => {
    expect(joinWithDash("a b c d")).toBe("a-b-c-d");
  });
});
