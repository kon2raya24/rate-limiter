import { describe, it, expect } from "vitest";
import { SlidingWindowLimiter } from "../slidingwindowlimiter";

describe("SlidingWindowLimiter", () => {
  it("should be a function", () => {
    expect(typeof SlidingWindowLimiter).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => SlidingWindowLimiter(null as any)).toThrow();
  });
});
