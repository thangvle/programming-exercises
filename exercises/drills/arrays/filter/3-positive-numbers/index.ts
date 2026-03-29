/**
 * Keep only positive numbers (greater than zero).
 *
 * Use: Array.prototype.filter
 *
 * @example
 * positiveNumbers([-1, 0, 2, 3, -5]) → [2, 3]
 * positiveNumbers([1, 2, 3]) → [1, 2, 3]
 */
export function positiveNumbers(nums: number[]): number[] {
  let positiveNumbers = nums.filter((i) => i > 0);

  return positiveNumbers;
}
