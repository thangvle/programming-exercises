import { test, expect, describe } from "bun:test";
import { longestWord } from "./index";

describe("longestWord", () => {
  test("finds longest word", () => {
    expect(longestWord("I love programming")).toBe("programming");
  });

  test("first word is longest", () => {
    expect(longestWord("elephant is big")).toBe("elephant");
  });

  test("single word", () => {
    expect(longestWord("hello")).toBe("hello");
  });

  test("tie returns first", () => {
    expect(longestWord("cat dog rat")).toBe("cat");
  });

  test("last word is longest", () => {
    expect(longestWord("a bb ccc")).toBe("ccc");
  });
});
