// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Input: string
// Output: boolean

function palindrome(str) {
  var trueString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  var reversedString = trueString.split('').reverse().join('');
  if(trueString === reversedString){
    return true;
  } else {
    return false;
  }
}

palindrome("_eye");

function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
      console.log(testName + " has passed!");
  } else {
      console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
  }
}

assertEqual(palindrome("eye"), true, "should return a boolean"); // Passed
assertEqual(palindrome("eye"), true, "should return true"); // Passed
assertEqual(palindrome("_eye"), true, "should return true"); // Passed
assertEqual(palindrome("race car"), true, "should return true"); // Passed
assertEqual(palindrome("not a palindrome"), false, "should return false"); // Passed
assertEqual(palindrome("A man, a plan, a canal. Panama"), true, "should return true"); // Passed
assertEqual(palindrome("nope"), false, "should return false"); // Passed
assertEqual(palindrome("five|\_/|four"), false, "should return false"); // Passed