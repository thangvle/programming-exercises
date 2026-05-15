const DELIMITERS = "-_/#";
function stringShortener(str: string, delimiters: string = DELIMITERS): string {
  const words = splitStr(str.trim(), delimiters); // step 1, split
  const processedWords = words.map(shortenWord); // step 2, process
  const result = processedWords.join(""); // step 3, join

  return result;
}
/*
 * E.g
 * "hello_my#name/is-An" -> ["hello","_","my","#","name","/","is","-","An"]
 * "hey#/what-" -> ["hey","#","/","what","-"]
 */
function splitStr(str: string, delimiters: string = DELIMITERS) {
  const delimitersMap = delimiters.split("").reduce(
    (acc, curChar) => {
      acc[curChar] = true;
      return acc;
    },
    {} as Record<string, boolean>,
  ); // typecasting since we need to provide type definition for aggregator in reducer fn

  const words = [];
  for (let i = 0; i < str.length; i++) {
    const curChar = str.charAt(i);
    if (i === 0) {
      words.push(curChar);
      continue;
    }

    if (isDelimiter(delimitersMap, curChar)) {
      words.push(curChar);
      continue;
    }

    // handle when curChar is not a delimiter
    const lastWord = words[words.length - 1];
    if (isDelimiter(delimitersMap, lastWord)) {
      words.push(curChar);
      continue;
    }

    // when curChar is not delimiter and the last word is also not a delimiter => append
    words[words.length - 1] = `${lastWord}${curChar}`;
  }
  return words;
}

function isDelimiter(delimitersMap: Record<string, boolean>, char: string) {
  return Boolean(delimitersMap[char]);
}

function shortenWord(word: string) {
  if (word.length <= 2) return word;
  return `${word.charAt(0)}${word.length - 2}${word.charAt(word.length - 1)}`;
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

// Expected output: "h3o-w3d"
// test(stringShortener, ["hello-world"], "h3o-w3d");
// test(stringShortener, ["hi-h231n"], "hi-h3n");
// test(stringShortener, ["king-"], "k2g-");
// test(stringShortener, ["--Hey"], "--H1y");

// test(stringShortener, ["hello#world"], "h3o#w3d");
// test(stringShortener, ["hello_world"], "h3o_w3d");
// test(stringShortener, ["//Hey"], "//H1y");
// test(stringShortener, ["hi##h231n"], "hi##h3n");
// test(stringShortener, ["king/"], "k2g/");
// test(stringShortener, ["hello_world   "], "h3o_w3d");

test(stringShortener, ["hello_my#name/is-An"], "h3o_my#n2e/is-An");
test(stringShortener, ["hello_my#name/is-An   "], "h3o_my#n2e/is-An");
test(stringShortener, ["_my#n/is-An   "], "_my#n/is-An");
test(stringShortener, ["_#n/is-An   "], "_#n/is-An");
test(stringShortener, ["hey#/what-"], "h1y#/w2t-");
test(stringShortener, ["h-e/y"], "h-e/y");
