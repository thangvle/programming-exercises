import { test, expect, describe } from "bun:test";
import { repeatJoin } from "./index";

describe("repeatJoin", () => {
  test("repeats 3 times with space", () => {
    expect(repeatJoin("ha", 3, " ")).toBe("ha ha ha");
  });

  test("repeats 4 times with dash", () => {
    expect(repeatJoin("na", 4, "-")).toBe("na-na-na-na");
  });

  test("repeats once returns the value", () => {
    expect(repeatJoin("ok", 1, ",")).toBe("ok");
  });

  test("repeats twice with space", () => {
    expect(repeatJoin("yo", 2, " ")).toBe("yo yo");
  });

  test("repeats 5 times with comma", () => {
    expect(repeatJoin("x", 5, ",")).toBe("x,x,x,x,x");
  });
});
