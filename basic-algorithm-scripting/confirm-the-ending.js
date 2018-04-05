// Challenge: Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target)
// This challenge cannot be solved with the .endsWith() method
// input: string
// output: boolean

function confirmEnding(str, target) {
  var last = str.substr(-target.length);
  return target === last;
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

assertEqual(confirmEnding("Bastian", "n"), true, "should return true"); // passed
assertEqual(confirmEnding("Connor", "n"), false, "should return false"); // passed
assertEqual(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"), false, "should return false"); // passed
assertEqual(confirmEnding("He has to give me a new name", "name"), true, "should return true"); // passed
assertEqual(confirmEnding("Open sesame", "same"), true, "should return true"); // passed