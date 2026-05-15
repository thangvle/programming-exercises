/**
 * Binary search question:
 * Given an array of commits, find the last successful commit.
 * The commits are represented as an array of 1s and 0s, where 1 is a successful commit and 0 is a failed commit.
 * The array is sorted in descending order, and the last successful commit is the last 1 in the array.
 * If there are no successful commits, return -1.
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
  let l = 0;
  let r = commits.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (commits[m] === 1) {
      if (m === commits.length - 1 || commits[m + 1] !== 1) return m;
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1;
}

function findLastSuccessfulCommitV2(commits: Commit[][]): number {
  let verticalIndex = binSearch({
    arr: commits,
    isMatching: (row, i, rows) => {
      let hasOne = row.some(v => v === 1);
      if (!hasOne) return false;
      if (i === rows.length - 1) return true;
      return !rows[i + 1].some(v => v === 1);
    },
    isShiftLeft: (row) => !row.some(v => v === 1),
    isShiftRight: (row) => row.some(v => v === 1),
  });

  if (verticalIndex === -1) return -1;

  let horizontalIndex = binSearch({
    arr: commits[verticalIndex],
    isMatching: (val, i, row) => {
      if (val !== 1) return false;
      if (i === row.length - 1) return true;
      return row[i + 1] !== 1;
    },
    isShiftLeft: (val) => val !== 1,
    isShiftRight: (val) => val === 1,
  });

  if (horizontalIndex === -1) return -1;

  let finalIndex = horizontalIndex;
  for (let i = 0; i < verticalIndex; i++) {
    finalIndex += commits[i].length;
  }
  return finalIndex;
}

function binSearch<T>({
  arr,
  isMatching,
  isShiftLeft,
  isShiftRight,
}: {
  arr: T[];
  isMatching: (curValue: T, curIdx: number, arr: T[]) => boolean;
  isShiftLeft: (curValue: T, curIdx: number, arr: T[]) => boolean;
  isShiftRight: (curValue: T, curIdx: number, arr: T[]) => boolean;
}): number {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    let cur = arr[m];
    if (isMatching(cur, m, arr)) return m;
    if (isShiftLeft(cur, m, arr)) r = m - 1;
    else if (isShiftRight(cur, m, arr)) l = m + 1;
    else throw Error("No matching condition - exhaustive");
  }
  return -1;
}

test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0],
    ],
  ],
  9,
);
test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0],
    ],
  ],
  12,
);
test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0],
    ],
  ],
  25,
);
test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1],
    ],
  ],
  26,
);
test(
  findLastSuccessfulCommitV2,
  [
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0],
    ],
  ],
  -1,
);

test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0],
    ],
  ],
  1,
);
test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0],
    ],
  ],
  13,
);

function test<T extends (...args: any[]) => any>(
  fn: T,
  args: Parameters<T>,
  expected: ReturnType<T>,
) {
  const result = fn(...args);
  const label = args.map(a =>
    Array.isArray(a) ? `[${a.map(r => Array.isArray(r) ? `[${r}]` : r).join(",")}]` : a
  ).join(", ");

  if (result !== expected) {
    console.error(`❌ Test failed: ${label} -> ${result} (expected: ${expected})`);
  } else {
    console.log(`✅ Test passed: ${label} -> ${result}`);
  }
}

