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

  const result  = splitProcess(str, DELIMITERS)
  return result
}

function shortenProcess(word: string){
  
  if (word.length <= 2) return word;
    let firstChar = word[0];
    let lastChar = word[word.length - 1];

    let middleLength = word.length - 2;

    return `${firstChar}${middleLength}${lastChar}`;
    
}

function splitProcess(
  str: string,
  DELIMITERS: string,
){
  let result = ""
  let word = ""

  str.split("").reduce((acc, curr, index)=>{
    
    if (DELIMITERS.includes(curr)) {
      if (word.length > 0) result += shortenProcess(word)
      result += curr
      console.log("result:", result)
      word = ""
    } else{
      word += curr
      console.log("word:", word)
    }
    return result
  })
  return result
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
// test(stringShortener, ["hello-io-poop"], "h3o-io-p2p");
// test(stringShortener, ["help-Elon"], "h2p-E2n");
// test(stringShortener, ["h-Elon"], "h-E2n");
// test(stringShortener, ["helloworld"], "h8d");
// test(stringShortener, ["-------"], "-------");
// test(stringShortener, ["-hello-world-"], "-h3o-w3d-");
// test(stringShortener, ["hello--world"], "h3o--w3d");

// test(stringShortener, ["hello#world"], "h3o#w3d");
// test(stringShortener, ["hello_world"], "h3o_w3d");
test(stringShortener, ["hello_im#An/what-are"], "h3o_im#An/w3t-a1e")