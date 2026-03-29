import { test, expect, describe } from "bun:test";
import { celsiusToFahrenheit } from ".";

describe("celsiusToFahrenheit", () => {
  test("converts freezing and boiling points", () => {
    expect(celsiusToFahrenheit([0, 100])).toEqual([32, 212]);
  });

  test("converts negative 40 (same in both scales)", () => {
    expect(celsiusToFahrenheit([-40])).toEqual([-40]);
  });

  test("converts body temperature", () => {
    expect(celsiusToFahrenheit([37])).toEqual([98.6]);
  });

  test("returns empty array for empty input", () => {
    expect(celsiusToFahrenheit([])).toEqual([]);
  });

  test("converts multiple temperatures", () => {
    expect(celsiusToFahrenheit([-10, 0, 10, 20, 30])).toEqual([14, 32, 50, 68, 86]);
  });
});
