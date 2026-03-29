/**
 * Sum all numbers in the array.
 *
 * Use: Array.prototype.reduce
 *
 * @example
 * sum([1, 2, 3, 4]) → 10
 * sum([10, -5, 5]) → 10
 */
export function sum(nums: number[]): number {
  if (nums.length === 0) return 0;

  return nums.reduce((acc, curr) => {
    return acc + curr;
  });
}
