import { test, expect, describe } from "bun:test";
import { formatCoordinates } from ".";

describe("formatCoordinates", () => {
  test("formats NYC coordinates", () => {
    expect(formatCoordinates(40.748817, -73.985428)).toBe("40.7488, -73.9854");
  });

  test("formats zero coordinates", () => {
    expect(formatCoordinates(0, 0)).toBe("0.0000, 0.0000");
  });

  test("formats whole number coordinates", () => {
    expect(formatCoordinates(51, -1)).toBe("51.0000, -1.0000");
  });

  test("formats southern hemisphere", () => {
    expect(formatCoordinates(-33.8688, 151.2093)).toBe("-33.8688, 151.2093");
  });

  test("formats coordinates needing rounding", () => {
    expect(formatCoordinates(35.68949, 139.69171)).toBe("35.6895, 139.6917");
  });
});
