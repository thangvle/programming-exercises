/**
 * Binary search question:
 * Given an array of commits, find the last successful commit.
 * The commits are represented as an array of 1s and 0s, where 1 is a successful commit and 0 is a failed commit.
 * The array is sorted in descending order, and the last successful commit is the last 1 in the array.
 * If there are no successful commits, return null.
 * @param commits - The array of commits
 * @returns The index of the last successful commit or -1 if there are no successful commits
 *
 * Example:
 * Input: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0]
 * Output: 3
 *
 * Input: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 * Output: -1
 */
type Commit = 1 | 0;
function findLastSuccessfulCommit(commits: Commit[]): number {
  //TODO:
  // Create a bin search function
  // find the middle index
  // add matching condition
  // shift left condition
  // shift right condition
  //
  // Matching condition:
  //
  // check the out of bound index === arr.length - 1, if inbound return true
  // check current idex value === 1 and the next idx === 0
  //
  // shift left condition:
  let result = binSearch({
    arr: commits,
    isMatched: (curValue, curIndex, arr) => {
      // check
      if (curValue !== 1) return false;
      let isCurIndexLast = (curIndex = arr.length - 1);
      if (isCurIndexLast) return true;
      return curValue === 1 && arr[curIndex + 1] !== 1;
    },
    isShiftLeft: (curValue) => curValue !== 1,
    isShiftRight: (curValue) => curValue === 1,
  });
  return result;
}
function binSearch<T extends unknown>({
  arr,
  isMatched,
  isShiftLeft,
  isShiftRight,
}: {
  arr: T[];
  isMatched: (curValue: T, curIndex: number, arr: T[]) => boolean;
  isShiftLeft: (curValue: T, curIndex: number, arr: T[]) => boolean;
  isShiftRight: (curValue: T, curIndex: number, arr: T[]) => boolean;
}) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (isMatched(arr[m], m, arr)) {
      return m;
    }
    if (isShiftLeft(arr[m], m, arr)) {
      r = m - 1;
      continue;
    }
    if (isShiftRight(arr[m], m, arr)) {
      l = m + 1;
      continue;
    }
  }
  return -1;
}
function test<T extends (...args: any[]) => any>(
  fn: T,
  args: Parameters<T>,
  expected: ReturnType<T>,
) {
  const result = fn(...args);

  if (result !== expected) {
    console.error(
      `❌ Test failed: ${args.join(", ")} -> ${result} (expected: ${expected})`,
    );
  } else {
    console.log(`✅ Test passed: ${args.join(", ")} -> ${result}`);
  }
}

test(findLastSuccessfulCommit, [[1, 1, 1, 1, 0, 0, 0, 0, 0, 0]], 3);
test(findLastSuccessfulCommit, [[1, 0, 0, 0]], 0);
test(findLastSuccessfulCommit, [[1, 1, 1, 1, 0, 0, 0]], 3);
test(findLastSuccessfulCommit, [[1, 1, 0, 0, 0, 0, 0]], 1);
test(findLastSuccessfulCommit, [[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]], 7);

test(findLastSuccessfulCommit, [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], -1);
