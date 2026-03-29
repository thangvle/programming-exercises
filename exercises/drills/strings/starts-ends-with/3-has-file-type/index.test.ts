import { test, expect, describe } from "bun:test";
import { hasFileType } from ".";

describe("hasFileType", () => {
  test("returns true when filename ends with given extension", () => {
    expect(hasFileType("photo.png", "png")).toBe(true);
  });

  test("returns false when filename has different extension", () => {
    expect(hasFileType("photo.png", "jpg")).toBe(false);
  });

  test("works with longer extensions", () => {
    expect(hasFileType("archive.tar.gz", "gz")).toBe(true);
  });

  test("returns false for partial match", () => {
    expect(hasFileType("song.mp3", "mp")).toBe(false);
  });

  test("handles extension with dot", () => {
    expect(hasFileType("document.pdf", "pdf")).toBe(true);
  });
});
