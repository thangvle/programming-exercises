import { test, expect, describe } from "bun:test";
import { formatFilesize } from ".";

describe("formatFilesize", () => {
  test("converts 1536 bytes to 1.50 KB", () => {
    expect(formatFilesize(1536)).toBe("1.50 KB");
  });

  test("converts 1024 bytes to 1.00 KB", () => {
    expect(formatFilesize(1024)).toBe("1.00 KB");
  });

  test("converts 0 bytes to 0.00 KB", () => {
    expect(formatFilesize(0)).toBe("0.00 KB");
  });

  test("converts 512 bytes to 0.50 KB", () => {
    expect(formatFilesize(512)).toBe("0.50 KB");
  });

  test("converts 2048 bytes to 2.00 KB", () => {
    expect(formatFilesize(2048)).toBe("2.00 KB");
  });
});
