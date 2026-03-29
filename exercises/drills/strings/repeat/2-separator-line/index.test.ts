import { test, expect, describe } from "bun:test";
import { separatorLine } from ".";

describe("separatorLine", () => {
  test("creates 10-dash line", () => {
    expect(separatorLine(10)).toBe("----------");
  });

  test("creates 3-dash line", () => {
    expect(separatorLine(3)).toBe("---");
  });

  test("creates single dash", () => {
    expect(separatorLine(1)).toBe("-");
  });

  test("creates empty string for zero", () => {
    expect(separatorLine(0)).toBe("");
  });

  test("creates 20-dash line", () => {
    expect(separatorLine(20)).toBe("--------------------");
  });
});
