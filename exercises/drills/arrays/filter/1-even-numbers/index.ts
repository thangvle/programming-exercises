/**
 * Keep only even numbers from the array.
 *
 * Use: Array.prototype.filter
 *
 * @example
 * evenNumbers([1, 2, 3, 4]) → [2, 4]
 * evenNumbers([1, 3, 5]) → []
 */
export function evenNumbers(nums: number[]): number[] {
  let result = nums.filter((i) => i % 2 === 0);
  return result;
}
