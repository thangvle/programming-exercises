# Binary Search Exercise — Thought Process

## Exercise

Find the last successful commit (`1`) in a 2D array of commits (`1`s and `0`s), where each row is sorted descending (all `1`s then all `0`s). Return the absolute index in the flattened array, or `-1` if no successful commit exists.

## Initial reading

The file `binSearch/index.ts` contains:

1. `findLastSuccessfulCommit` (1D, commented out tests) — a correct binary search finding the last `1` in a sorted 1D array.
2. `findLastSuccessfulCommitV2` (2D) — uses a generic `binSearch` helper twice: first vertically across rows to find the last row containing a `1`, then horizontally within that row to find the last `1`.
3. `binSearch<T>` — generic binary search parameterized with `isMatching`, `isShiftLeft`, `isShiftRight` callbacks.
4. Seven test cases for `findLastSuccessfulCommitV2`.

## Running the tests

```bash
bun run binSearch/index.ts
```

Output:

```
verticalIndex 1 horizontalIndex 2
✅ Test passed: ... -> 9
verticalIndex 1 horizontalIndex 5
✅ Test passed: ... -> 12
verticalIndex 3 horizontalIndex 0
✅ Test passed: ... -> 25
verticalIndex 3 horizontalIndex 1
✅ Test passed: ... -> 26
✅ Test passed: ... -> -1
❌ Test failed: ... -> -1 (expected: 1)
❌ Test failed: ... -> -1 (expected: 13)
```

Tests 6 and 7 fail, returning `-1` instead of the correct indices.

## Analysis of the failing tests

### Test 6

```
commits = [
  [1, 1, 0, 0, 0, 0, 0],   // row 0 — last row with a 1
  [0, 0, 0, 0, 0, 0],        // row 1
  [0, 0, 0, 0, 0, 0, ...],   // row 2
  [0, 0],                     // row 3
]
Expected: 1  (absolute index of the last 1)
```

Vertical search should find row 0, horizontal search should find index 1 within row 0, giving `0 + 1 = 1`.

### Test 7

```
commits = [
  [1, 1, 1, 1, 1, 1, 1],   // row 0
  [1, 1, 1, 1, 1, 1],        // row 1
  [1, 0, 0, 0, ...],          // row 2 — last row with a 1
  [0, 0],                     // row 3
]
Expected: 13  (row 0 length 7 + row 1 length 6 + index 0 within row 2)
```

Vertical search should find row 2, horizontal search should find index 0 within row 2, giving `7 + 6 + 0 = 13`.

Both return `-1`. Notably no `verticalIndex/horizontalIndex` console output for these, meaning the failure happens before that line.

## How to solve the 2D case from scratch

The 2D problem needs a two-phase binary search because the data is **sorted along two dimensions**:
- Vertically: rows transition from "all-1s" rows → "mixed" rows → "all-0s" rows (these can only appear after a row that contains at least one 0, since if a row is all 0s, all subsequent rows must also be all 0s — the property isn't strictly guaranteed by the problem statement, but binary search still works correctly either way).
- Horizontally: each row is sorted descending (1s then 0s).

### Phase 1: Find the last row containing a 1

Use binary search vertically across the rows. The matching condition must identify **the last row that still has a 1**:

| Condition | Action |
|---|---|
| Current row has a 1 AND next row has NO 1s (or current is the last row) | → **Match** (this is the last row with a 1) |
| Current row has NO 1s | → **Shift left** (look earlier) |
| Current row has a 1 but next row ALSO has a 1 | → **Shift right** (the last 1-row is further down) |

In callback form:

```typescript
isMatching: (row, i, rows) => {
  const hasOne = row.some(v => v === 1);
  if (!hasOne) return false;
  if (i === rows.length - 1) return true;       // last row, no further rows
  return !rows[i + 1].some(v => v === 1);        // next row has no 1s
},
isShiftLeft:  row => !row.some(v => v === 1),   // row has no 1s → go up
isShiftRight: row => row.some(v => v === 1),    // row has 1s → but maybe further rows do too → go down
```

### Phase 2: Find the last 1 within that row

Once we know which row contains the last 1, do a standard binary search within that row to find the last `1`:

| Condition | Action |
|---|---|
| Current value is 1 AND next value is NOT 1 (or current is last index) | → **Match** (last 1 in row) |
| Current value is NOT 1 | → **Shift left** (1s are earlier) |
| Current value is 1 but next is also 1 | → **Shift right** (later 1 exists) |

```typescript
isMatching: (val, i, row) => {
  if (val !== 1) return false;
  if (i === row.length - 1) return true;   // last element
  return row[i + 1] !== 1;                  // next is 0 or out of bounds
},
isShiftLeft:  val => val !== 1,             // value is 0 → go left
isShiftRight: val => val === 1,             // value is 1 but more may exist → go right
```

### Phase 3: Compute absolute index

Sum the lengths of all rows above the found row, then add the horizontal index:

```typescript
let absoluteIndex = 0;
for (let i = 0; i < verticalIndex; i++) {
  absoluteIndex += commits[i].length;
}
absoluteIndex += horizontalIndex;
```

### Edge cases

| Scenario | Behavior |
|---|---|
| No row has a 1 (e.g. all 0s) | Vertical search returns -1 → return -1 |
| First row(s) are empty `[]` | `row.some(...)` returns `false` for empty array — treated as "no 1s", shifts left correctly. The guard `if (!commits[verticalIndex])` catches undefined rows. |

### Generic binary search helper

The `binSearch<T>` function abstracts the common binary search pattern so both phases reuse the same loop logic:

```typescript
function binSearch<T>({ arr, isMatching, isShiftLeft, isShiftRight }): number {
  let l = 0, r = arr.length - 1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (isMatching(arr[m], m, arr)) return m;
    if (isShiftLeft(arr[m], m, arr))  { r = m - 1; continue; }
    if (isShiftRight(arr[m], m, arr)) { l = m + 1; continue; }
    throw Error("No matching condition - exhaustive");
  }
  return -1;
}
```

**Critical:** Do NOT add a falsy check like `if (!arr[m]) return -1`. When `T` is `Commit` (`1 | 0`), `arr[m] = 0` is falsy and causes a premature `-1` return — this was the actual bug.

## Root cause

Looking at the `binSearch` helper:

```typescript
function binSearch<T extends unknown>({ ... }): number {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (!arr[m]) return -1;  // ← BUG: treats 0 as "no element"
    if (isMatching(arr[m], m, arr)) return m;
    if (isShiftLeft(arr[m], m, arr)) { r = m - 1; continue; }
    if (isShiftRight(arr[m], m, arr)) { l = m + 1; continue; }
    throw Error("No matching condition - exhaustive");
  }
  return -1;
}
```

The guard `if (!arr[m]) return -1` was intended to catch out-of-bounds or undefined elements. However, since `T = Commit` is `1 | 0`, when `arr[m] = 0`, `!0` is `true`, so the function immediately returns `-1`.

### Trace of the failure for Test 6

**Vertical search** succeeds: row 0 contains `1`s, row 1 has none → `verticalIndex = 0`.

**Horizontal search** on `row = [1, 1, 0, 0, 0, 0, 0]`:
- `l = 0, r = 6`
- `m = floor((0+6)/2) = 3`
- `arr[3] = 0` → `!0 = true` → returns `-1`.

The search never gets to check lower indices where the `1`s actually are.

## Fix

Remove the `!arr[m]` guard. Binary search with l/r bounds properly computed never accesses out-of-bounds indices, so the check is unnecessary. When the array values include `0` (falsy), it actively breaks the search.

```diff
-    if (!arr[m]) return -1;
      if (isMatching(arr[m], m, arr)) {
```

## Verification

After the fix, all 7 tests pass:

```
verticalIndex 1 horizontalIndex 2
✅ Passed: ... -> 9
verticalIndex 1 horizontalIndex 5
✅ Passed: ... -> 12
verticalIndex 3 horizontalIndex 0
✅ Passed: ... -> 25
verticalIndex 3 horizontalIndex 1
✅ Passed: ... -> 26
✅ Passed: ... -> -1
verticalIndex 0 horizontalIndex 1
✅ Passed: ... -> 1
verticalIndex 2 horizontalIndex 0
✅ Passed: ... -> 13
```

## Lesson

Generic utility functions should not assume their type parameter excludes falsy values like `0`. A bounds-checked binary search doesn't need a "truthy" guard — the `l ≤ r` loop condition already prevents out-of-bounds access.
