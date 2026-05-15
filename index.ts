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
  let result = processStrShorten(str, delimiters);

  return result;
}

function shortenStr(word: string) {
  if (word.length < 3) return word;
  let firstChar = word[0];
  let middleLength = word.length - 2;
  let endChar = word[word.length - 1];

  return `${firstChar}${middleLength}${endChar}`;
}

function processStrShorten(str: string, delimiter: string) {
  let word = "";
  let result = "";
  // Traverse the string to identify the symbol
  // add char by char to until reach the delimiter char
  // check if char match the delimiter using includes()
  // if the symbol match, shorten the word, add the delimiter, then reset the segment
  let wordArr = str.trim().split("");

  for (let i = 0; i <= wordArr.length; i++) {
    if (delimiter.includes(wordArr[i] as string) || i === wordArr.length) {
      if (word.length > 0) {
        result += shortenStr(word);
      }
      if (i < wordArr.length) result += wordArr[i];
      word = "";
    } else {
      word += wordArr[i];
    }
  }
  return result;
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
