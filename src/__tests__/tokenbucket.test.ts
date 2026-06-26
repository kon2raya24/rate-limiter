import { describe, it, expect } from "vitest";
import { TokenBucket } from "../tokenbucket";

describe("TokenBucket", () => {
  it("should be a function", () => {
    expect(typeof TokenBucket).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => TokenBucket(null as any)).toThrow();
  });
});
