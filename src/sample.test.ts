import { describe, it, expect } from "vitest";

describe("Sample Test Suite", () => {
  it("should run basic tests", () => {
    expect(true).toBe(true);
  });

  it("should perform arithmetic operations", () => {
    expect(1 + 1).toBe(2);
  });

  it("should handle strings", () => {
    expect("hello".toUpperCase()).toBe("HELLO");
  });
});
