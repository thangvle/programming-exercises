import { test, expect, describe } from "bun:test";
import { addProtocol } from ".";

describe("addProtocol", () => {
  test("adds https:// to bare domain", () => {
    expect(addProtocol("example.com")).toBe("https://example.com");
  });

  test("does not modify https URL", () => {
    expect(addProtocol("https://example.com")).toBe("https://example.com");
  });

  test("does not modify http URL", () => {
    expect(addProtocol("http://example.com")).toBe("http://example.com");
  });

  test("adds https:// to domain with path", () => {
    expect(addProtocol("example.com/page")).toBe("https://example.com/page");
  });

  test("adds https:// to subdomain", () => {
    expect(addProtocol("www.example.com")).toBe("https://www.example.com");
  });
});
