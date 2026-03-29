import { test, expect, describe } from "bun:test";
import { categorizeFile } from ".";

describe("categorizeFile", () => {
  test("returns 'image' for .jpg", () => {
    expect(categorizeFile("photo.jpg")).toBe("image");
  });

  test("returns 'image' for .png", () => {
    expect(categorizeFile("screenshot.png")).toBe("image");
  });

  test("returns 'document' for .pdf", () => {
    expect(categorizeFile("report.pdf")).toBe("document");
  });

  test("returns 'document' for .txt", () => {
    expect(categorizeFile("notes.txt")).toBe("document");
  });

  test("returns 'other' for unknown extension", () => {
    expect(categorizeFile("data.csv")).toBe("other");
  });
});
