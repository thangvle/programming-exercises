import { test, expect, describe } from "bun:test";
import { pathJoin } from "./index";

describe("pathJoin", () => {
  test("joins three segments", () => {
    expect(pathJoin(["users", "john", "docs"])).toBe("users/john/docs");
  });

  test("joins two segments", () => {
    expect(pathJoin(["home", "file.txt"])).toBe("home/file.txt");
  });

  test("returns single segment", () => {
    expect(pathJoin(["root"])).toBe("root");
  });

  test("joins four segments", () => {
    expect(pathJoin(["a", "b", "c", "d"])).toBe("a/b/c/d");
  });

  test("returns empty string for empty array", () => {
    expect(pathJoin([])).toBe("");
  });
});
