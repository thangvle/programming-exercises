export function binarySearch(arr: number[], target: number): number {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] === target) {
      return m;
    } else {
      r = m - 1;
    }
  }
  return -1;
}
