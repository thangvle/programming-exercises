import { test, expect, describe } from "bun:test";
import { fillTemplate } from ".";

describe("fillTemplate", () => {
  test("replaces single placeholder", () => {
    expect(fillTemplate("Hello {{name}}", "Alice")).toBe("Hello Alice");
  });

  test("replaces multiple placeholders", () => {
    expect(fillTemplate("{{name}} is {{name}}", "Bob")).toBe("Bob is Bob");
  });

  test("returns same string when no placeholder", () => {
    expect(fillTemplate("Hello world", "Alice")).toBe("Hello world");
  });

  test("replaces placeholder at start", () => {
    expect(fillTemplate("{{name}}!", "Hey")).toBe("Hey!");
  });

  test("replaces placeholder at end", () => {
    expect(fillTemplate("Hi {{name}}", "there")).toBe("Hi there");
  });
});
