/**
 * Write a function that takes a string and return the shortened version of the string,
 * following the logic of i18n or k9s style.
 * @param str - The input string
 * @returns The shortened string
 */

const DELIMITERS = "-_/#";
function stringShortener(str: string, delimiters: string = DELIMITERS): string {
  // TODO: split by symbol
  // shotern string by get the first char + middleLenght + endChar
  // join by dash
  let { wordArr, symbol } = processStrShorten(str, delimiters);

  return wordArr
    .map((word) => {
      if (word.length <= 2 || !word) return word;

      let firstChar = word[0];
      let middleLength = word.length - 2;
      let endChar = word[word.length - 1];

      return `${firstChar}${middleLength}${endChar}`;
    })
    .join(symbol);
}

function processStrShorten(str: string, delimiter: string) {
  let symbol = "";

  // Traverse the string to identify the symbol
  // Traverse the delimiter to find the symbol
  // if the symbol match, split by that symbol
  // process to shorten the string
  // join back by symbol
  for (let i = 0; i < delimiter.length; i++) {
    str.split("").reduce((acc, curr) => {
      if (curr === delimiter[i]) symbol[i] = delimiter[i] as string;
    });
  }

  return { wordArr: str.trim().split(symbol), symbol: symbol };
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
test(stringShortener, ["hello-world"], "h3o-w3d");
test(stringShortener, ["hi-h231n"], "hi-h3n");
test(stringShortener, ["king-"], "k2g-");
test(stringShortener, ["--Hey"], "--H1y");

test(stringShortener, ["hello#world"], "h3o#w3d");
test(stringShortener, ["hello_world"], "h3o_w3d");
test(stringShortener, ["//Hey"], "//H1y");
test(stringShortener, ["hi##h231n"], "hi##h3n");
test(stringShortener, ["king/"], "k2g/");
test(stringShortener, ["hello_world   "], "h3o_w3d");

test(stringShortener, ["hello_my#name/is-An"], "h3o_my#n2e/is-An");
test(stringShortener, ["hello_my#name/is-An   "], "h3o_my#n2e/is-An");
test(stringShortener, ["hey#/what-"], "h1y#/w2t-");
test(stringShortener, ["h-e/y"], "h-e/y");
