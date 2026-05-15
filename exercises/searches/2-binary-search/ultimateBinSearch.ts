/**
 * Performs binary search on any array typed, given predicates
 */
function ultimateBinarySearch<T extends unknown>({
  arr,
  isMatched,
  shouldShiftLeft,
  shouldShiftRight,
}: {
  arr: T[];
  isMatched: (curValue: T, curValueIndex: number, arr: T[]) => boolean;
  shouldShiftLeft: (curValue: T, curValueIndex: number, arr: T[]) => boolean;
  shouldShiftRight: (curValue: T, curValueIndex: number, arr: T[]) => boolean;
}) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (isMatched(arr[m], m, arr)) {
      return m;
    }

    if (shouldShiftLeft(arr[m], m, arr)) {
      r = m - 1;
      continue;
    }

    if (shouldShiftRight(arr[m], m, arr)) {
      l = m + 1;
      continue;
    }

    throw new Error("Callback checks are not exhaustive");
  }

  return -1;
}

const result = ultimateBinarySearch({
  arr: [1, 2, 3, 4, 5, 6],
  isMatched: (curValue) => curValue === 3,
  shouldShiftLeft: (curValue) => curValue < 3,
  shouldShiftRight: (curValue) => curValue > 3,
});

const result2 = ultimateBinarySearch({
  arr: [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  isMatched: (curValue, curValueIndex, arr) => {
    if (curValue !== 1) return false;

    const isCurValueLast = curValueIndex === arr.length - 1;
    if (isCurValueLast) return true;

    const nextNumber = arr[curValueIndex + 1];
    return curValue === 1 && nextNumber !== 1;
  },
  shouldShiftLeft: (curValue) => curValue !== 1,
  shouldShiftRight: (curValue) => curValue === 1,
});

console.log(result);
console.log(result2);
