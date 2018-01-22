// Return the length of the longest word in the provided sentence.
// Your response should be a number.
// Input: string
// Output: number(integer)

// Solution #1
function findLongestWord(str) {
  var words = str.split(' ');
  var longest = 0;
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > longest) {
      longest = words[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// Solution #2
function reduceLongestWord(str) {
  var words = str.split(' ');
  return words.reduce(function(acc, cur) {
    return cur.length > acc ? cur.length : acc;
  }, 0);
}


findLongestWord("What is the average airspeed velocity of an unladen swallow");

function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
      console.log(testName + "has passed!");
  } else {
      console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
  }
}

assertEqual(findLongestWord("The quick brown fox jumped over the lazy dog"), 6, "should return a number "); // Passed
assertEqual(findLongestWord("The quick brown fox jumped over the lazy dog"), 6, "should return 6 "); // Passed
assertEqual(findLongestWord("May the force be with you"), 5, "should return 5 "); // Passed
assertEqual(reduceLongestWord("Google do a barrel roll"), 6, "should return 6 "); // Passed
assertEqual(reduceLongestWord("What is the average airspeed velocity of an unladen swallow"), 8, "should return 8 "); // Passed
assertEqual(reduceLongestWord("What if we try a super-long word such as otorhinolaryngology"), 19, "should return 19 "); // Passed
