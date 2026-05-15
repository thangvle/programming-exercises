type Commit = 1 | 0;
function findLastSuccessfulCommitV2(commits: Commit[][]): number {
  // matching condition of binSearch: curValu === 1 and nextValue !== 1
  // check last postion: isLastIndex === true && curValue === 1
  // do binSearch on the column to find the matching condition vertically
  // do binSearch on the row to find the matching condition
  // iterate through the loop to get the length of previous array
  // add the length of working commit to the horizontal index

  let verticalIndex = binSearch({
    arr: commits,
    isMatch: (curValue, curIndex, arr) => {
      console.log("curValue", curValue);
      console.log("curIndex", curIndex);

      const nextValue = arr[curIndex + 1];
      console.log("nextValue", nextValue);

      if (nextValue === undefined) return curValue[0] === 1;

      return curValue[0] === 1 && nextValue[0] !== 1;
    },
    isShiftLeft: (curValue) => curValue[0] !== 1,
    isShiftRight: (curValue) => curValue[0] === 1,
  });

  console.log(commits[verticalIndex]);
  console.log("verticalIndex", verticalIndex);
  console.log("commits", commits);
  console.log("========");
  // if (commits[verticalIndex] === undefined) return ;
  let horizontalIndex = binSearch({
    arr: commits[verticalIndex],
    isMatch: (curValue, curIndex, arr) => {
      let isLastIndex = curValue === arr.length - 1;
      if (isLastIndex && curValue === 1) return true;

      const nextValue = arr[curIndex + 1];
      return curValue === 1 && nextValue !== 1;
    },
    isShiftLeft: (curValue) => curValue !== 1,
    isShiftRight: (curValue) => curValue === 1,
  });

  let finalIndex = 0;
  for (let i = 0; i < verticalIndex; i++) {
    let commitRow = commits[i];
    if (commitRow === undefined) continue;
    finalIndex += commitRow.length;
  }
  finalIndex = finalIndex + horizontalIndex;
  return finalIndex;
}

function binSearch<T extends Commit | Commit[]>({
  arr,
  isMatch,
  isShiftLeft,
  isShiftRight,
}: {
  arr: T[];
  isMatch: (curValue: T, curIndex: number, arr: T[]) => boolean;
  isShiftLeft: (curValue: T, curIndex: number, arr: T[]) => boolean;
  isShiftRight: (curValue: T, curIndex: number, arr: T[]) => boolean;
}) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === undefined) return -1;
    if (isMatch(arr[m], m, arr)) return m;
    if (isShiftLeft(arr[m], m, arr)) {
      r = m - 1;
      continue;
    }
    if (isShiftRight(arr[m], m, arr)) {
      l = m + 1;
      continue;
    }
    throw Error("No matching condition");
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
test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 0, 0, 0],
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
      [1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0],
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
      [1, 1, 1],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0],
    ],
  ],
  2,
);
test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0],
    ],
  ],
  27,
);

test(
  findLastSuccessfulCommitV2,
  [
    [
      [1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0],
    ],
  ],
  28,
);
