export class SlidingWindowLimiter {
  private timestamps: number[] = [];
  constructor(private maxRequests: number, private windowMs: number) {}
  tryAcquire(): boolean {
    const now = Date.now();
    this.timestamps = this.timestamps.filter(t => now - t < this.windowMs);
    if (this.timestamps.length >= this.maxRequests) return false;
    this.timestamps.push(now);
    return true;
  }
  get remaining(): number {
    const now = Date.now();
    this.timestamps = this.timestamps.filter(t => now - t < this.windowMs);
    return this.maxRequests - this.timestamps.length;
  }
}
