/**
 * Write a function that takes a string and return the shortened version of the string,
 * following the logic of i18n or k9s style.
 * @param str - The input string
 * @returns The shortened string
 */
const DELIMITERS = "-_/#";
function stringShortener(str: string, delimiters: string = DELIMITERS): string {
  // TODO: implement
  // before split, check the char by the DELIMITERS using contain. identify symbol
  // split by symbol
  // process shorten the word
  // get first and last char and middleword length
  // combine word
  // join by -
  //

  const { wordList, symbol } = shortenProcess(str, DELIMITERS);
  return wordList
    .map((word) => {
      if (word.length <= 2) return word;
      let firstChar = word[0];
      let lastChar = word[word.length - 1];

      let middleLength = word.length - 2;

      return `${firstChar}${middleLength}${lastChar}`;
    })
    .join(symbol);
}

function shortenProcess(
  str: string,
  DELIMITERS: string,
): { wordList: string[]; symbol: string } {
  let symbol = DELIMITERS.split("").reduce((acc, curr) => {
    if (str.includes(curr)) return curr;
    return acc;
  }, "");

  if (symbol === "") return { wordList: [str], symbol: "" };

  return {
    wordList: str.split(symbol),
    symbol,
  };
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
test(stringShortener, ["hello-io-poop"], "h3o-io-p2p");
test(stringShortener, ["help-Elon"], "h2p-E2n");
test(stringShortener, ["h-Elon"], "h-E2n");
test(stringShortener, ["helloworld"], "h8d");
test(stringShortener, ["-------"], "-------");
test(stringShortener, ["-hello-world-"], "-h3o-w3d-");
test(stringShortener, ["hello--world"], "h3o--w3d");

test(stringShortener, ["hello#world"], "h3o#w3d");
test(stringShortener, ["hello_world"], "h3o_w3d");
