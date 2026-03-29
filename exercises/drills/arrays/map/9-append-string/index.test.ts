import { test, expect, describe } from "bun:test";
import { appendString } from ".";

describe("appendString", () => {
  test("appends file extension", () => {
    expect(appendString(["file1", "file2"], ".txt")).toEqual([
      "file1.txt",
      "file2.txt",
    ]);
  });

  test("appends punctuation", () => {
    expect(appendString(["a", "b"], "!")).toEqual(["a!", "b!"]);
  });

  test("appends empty string", () => {
    expect(appendString(["hello", "world"], "")).toEqual(["hello", "world"]);
  });

  test("returns empty array for empty input", () => {
    expect(appendString([], ".txt")).toEqual([]);
  });

  test("handles single element", () => {
    expect(appendString(["doc"], ".pdf")).toEqual(["doc.pdf"]);
  });
});
