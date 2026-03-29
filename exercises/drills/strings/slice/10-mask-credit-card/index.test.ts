import { test, expect, describe } from "bun:test";
import { maskCreditCard } from "./index";

describe("maskCreditCard", () => {
  test("masks 16 digit card", () => {
    expect(maskCreditCard("1234567812345678")).toBe("************5678");
  });

  test("masks another 16 digit card", () => {
    expect(maskCreditCard("4111111111111111")).toBe("************1111");
  });

  test("masks 15 digit card", () => {
    expect(maskCreditCard("123456789012345")).toBe("***********2345");
  });

  test("4 digit number stays visible", () => {
    expect(maskCreditCard("1234")).toBe("1234");
  });

  test("5 digit number masks first one", () => {
    expect(maskCreditCard("12345")).toBe("*2345");
  });
});
