import { test, expect, describe } from "bun:test";
import { centsToDollars } from ".";

describe("centsToDollars", () => {
  test("converts 1550 cents to 15.50", () => {
    expect(centsToDollars(1550)).toBe("15.50");
  });

  test("converts 99 cents to 0.99", () => {
    expect(centsToDollars(99)).toBe("0.99");
  });

  test("converts 0 cents to 0.00", () => {
    expect(centsToDollars(0)).toBe("0.00");
  });

  test("converts 100 cents to 1.00", () => {
    expect(centsToDollars(100)).toBe("1.00");
  });

  test("converts 1 cent to 0.01", () => {
    expect(centsToDollars(1)).toBe("0.01");
  });
});
