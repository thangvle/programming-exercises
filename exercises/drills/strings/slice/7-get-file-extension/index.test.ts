import { test, expect, describe } from "bun:test";
import { getFileExtension } from "./index";

describe("getFileExtension", () => {
  test("gets png extension", () => {
    expect(getFileExtension("photo.png")).toBe("png");
  });

  test("gets ts extension", () => {
    expect(getFileExtension("index.ts")).toBe("ts");
  });

  test("gets extension with multiple dots", () => {
    expect(getFileExtension("archive.tar.gz")).toBe("gz");
  });

  test("gets txt extension", () => {
    expect(getFileExtension("readme.txt")).toBe("txt");
  });

  test("gets html extension", () => {
    expect(getFileExtension("page.html")).toBe("html");
  });
});
