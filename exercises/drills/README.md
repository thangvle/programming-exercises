# Drills

Bite-sized exercises for building muscle memory with common JavaScript/TypeScript functions. These functions show up constantly in interviews and day-to-day coding — the goal is to practice them until they become second nature.

## Commands

```bash
bun run test:drills                                        # run all drill tests
bun run test:drills:watch                                  # run all drill tests in watch mode
bun test exercises/drills/<category>/<topic>/<exercise>     # run a specific exercise
```

## How to use

1. Pick a category and exercise
2. Read the description and examples in `index.ts`
3. Implement the function
4. Run the tests: `bun test exercises/drills/<category>/<topic>/<exercise>`
5. Repeat — speed and confidence come from repetition

## Categories

### Strings

| Topic | Functions practiced |
|---|---|
| `slice/` | `str.slice()` |
| `split/` | `str.split()` |
| `includes-indexof/` | `str.includes()`, `str.indexOf()` |
| `replace/` | `str.replace()`, `str.replaceAll()` |
| `trim/` | `str.trim()`, `str.trimStart()`, `str.trimEnd()` |
| `starts-ends-with/` | `str.startsWith()`, `str.endsWith()` |
| `case-conversion/` | `str.toUpperCase()`, `str.toLowerCase()` |
| `pad/` | `str.padStart()`, `str.padEnd()` |
| `repeat/` | `str.repeat()` |

### Arrays

| Topic | Functions practiced |
|---|---|
| `map/` | `arr.map()` |
| `filter/` | `arr.filter()` |
| `reduce/` | `arr.reduce()` |
| `find/` | `arr.find()`, `arr.findIndex()` |
| `includes-indexof/` | `arr.includes()`, `arr.indexOf()` |
| `some-every/` | `arr.some()`, `arr.every()` |
| `sort/` | `arr.sort()` |
| `flat/` | `arr.flat()`, `arr.flatMap()` |
| `slice-splice/` | `arr.slice()`, `arr.splice()` |
| `join/` | `arr.join()` |

### Objects

| Topic | Functions practiced |
|---|---|
| `keys-values-entries/` | `Object.keys()`, `Object.values()`, `Object.entries()` |
| `from-entries/` | `Object.fromEntries()` |
| `assign-spread/` | `Object.assign()`, spread `{ ...obj }` |

### Numbers

| Topic | Functions practiced |
|---|---|
| `rounding/` | `Math.floor()`, `Math.ceil()`, `Math.round()` |
| `min-max/` | `Math.min()`, `Math.max()` |
| `parsing/` | `parseInt()`, `parseFloat()` |
| `to-fixed/` | `Number.toFixed()` |

## Tips

- Don't look at solutions — type it out yourself every time
- If an exercise feels easy, that's the point — you're building speed
- Revisit categories you haven't touched in a while
- Each exercise has 5 tests — aim for all green
