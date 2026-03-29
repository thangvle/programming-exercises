import { test, expect, describe } from "bun:test";
import { isHttps } from ".";

describe("isHttps", () => {
  test("returns true for https URL", () => {
    expect(isHttps("https://example.com")).toBe(true);
  });

  test("returns false for http URL", () => {
    expect(isHttps("http://example.com")).toBe(false);
  });

  test("returns false for URL without protocol", () => {
    expect(isHttps("example.com")).toBe(false);
  });

  test("returns true for https with path", () => {
    expect(isHttps("https://example.com/path")).toBe(true);
  });

  test("returns false for string containing https in the middle", () => {
    expect(isHttps("visit https://example.com")).toBe(false);
  });
});
