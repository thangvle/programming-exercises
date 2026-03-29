import { test, expect, describe } from "bun:test";
import { getInitials } from "./index";

describe("getInitials", () => {
  test("two word name", () => {
    expect(getInitials("John Doe")).toBe("JD");
  });

  test("three word name", () => {
    expect(getInitials("Mary Jane Watson")).toBe("MJW");
  });

  test("single word name", () => {
    expect(getInitials("Cher")).toBe("C");
  });

  test("lowercase name", () => {
    expect(getInitials("bob smith")).toBe("bs");
  });

  test("four word name", () => {
    expect(getInitials("Juan Carlos De Leon")).toBe("JCDL");
  });
});
