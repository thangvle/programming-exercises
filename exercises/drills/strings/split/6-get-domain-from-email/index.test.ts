import { test, expect, describe } from "bun:test";
import { getDomain } from "./index";

describe("getDomain", () => {
  test("gets domain from standard email", () => {
    expect(getDomain("user@example.com")).toBe("example.com");
  });

  test("gets domain from gmail", () => {
    expect(getDomain("john@gmail.com")).toBe("gmail.com");
  });

  test("gets domain with subdomain", () => {
    expect(getDomain("admin@mail.company.org")).toBe("mail.company.org");
  });

  test("gets domain from work email", () => {
    expect(getDomain("jane.doe@work.co")).toBe("work.co");
  });

  test("gets domain with plus addressing", () => {
    expect(getDomain("user+tag@example.com")).toBe("example.com");
  });
});
