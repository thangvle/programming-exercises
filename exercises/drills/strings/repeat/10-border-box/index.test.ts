import { test, expect, describe } from "bun:test";
import { borderBox } from ".";

describe("borderBox", () => {
  test("creates box around 'hi'", () => {
    expect(borderBox("hi")).toBe("+----+\n| hi |\n+----+");
  });

  test("creates box around 'hello'", () => {
    expect(borderBox("hello")).toBe("+-------+\n| hello |\n+-------+");
  });

  test("creates box around single character", () => {
    expect(borderBox("x")).toBe("+---+\n| x |\n+---+");
  });

  test("creates box around longer text", () => {
    expect(borderBox("hello world")).toBe("+-------------+\n| hello world |\n+-------------+");
  });

  test("creates box around empty string", () => {
    expect(borderBox("")).toBe("+--+\n|  |\n+--+");
  });
});
