// Challenge: Tile Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var strings = str.toLowerCase().split(' ');
  return strings.map(function(word, i) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
}


titleCase("I'm a little tea pot");

function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
      console.log(testName + " has passed!");
  } else {
      console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
  }
}

assertEqual(titleCase("I'm a little tea pot"), "I'm A Little Tea Pot", "Should return a string"); // Passed
assertEqual(titleCase("I'm a little tea pot"), "I'm A Little Tea Pot", "Should return \"I'm A Little Tea Pot\""); // Passed
assertEqual(titleCase("sHoRt AnD sToUt"), "Short And Stout", "Should return \"Short And Stout\""); // Passed
assertEqual(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"), "Here Is My Handle Here Is My Spout", "Should return \"Here Is My Handle Here Is My Spout\""); // Passed