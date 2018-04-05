// Challenge: Repeat a string repeat a string
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
// input: string
// output: string

function repeatStringNumTimes(str, num) {
  if(num < 0) {
    return "";
  }
  
  return str.repeat(num);
}

function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
      console.log(testName + " has passed!");
  } else {
      console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
  }
}

assertEqual(repeatStringNumTimes("*", 3), "***", "should return \"***\""); // passed
assertEqual(repeatStringNumTimes("abc", 3), "abcabcabc", "should return \"abcabcabc\""); //passed
assertEqual(repeatStringNumTimes("abc", 4), "abcabcabcabc", "should return \"abcabcabcabc\""); //passed
assertEqual(repeatStringNumTimes("*", 8), "********", "should return \"********\""); //passed
assertEqual(repeatStringNumTimes("abc", -2), "", "should return \"\""); //passed
