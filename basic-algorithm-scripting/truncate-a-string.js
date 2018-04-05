// Challenge: Truncate A String
/**
 * Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
 * Return the truncated string with a ... ending.
 * Note that inserting the three dots to the end will add to the string length.
 * However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
 */
// input: string
// output: string

function truncateString(str, num) {
  if (num <= 3) {
    return str.slice(0, num) + "...";
  }  else if (str.length > num) {
    return str.slice(0, (num -3)) + "...";
  } 
    
  return str;
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

assertEqual(truncateString("A-tisket a-tasket A green and yellow basket", 11), "A-tisket...", "should return \"A-tisket...\""); // passed
assertEqual(truncateString("Peter Piper picked a peck of pickled peppers", 14), "Peter Piper...", "should return \"Peter Piper...\""); // passed
assertEqual(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length), "A-tisket a-tasket A green and yellow basket", "should return \"A-tisket a-tasket A green and yellow basket\""); // passed
assertEqual(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length  + 2), "A-tisket a-tasket A green and yellow basket", "should return \"A-tisket a-tasket A green and yellow basket\""); // passed
assertEqual(truncateString("A-", 1), "A...", "should return \"A...\""); // passed
assertEqual(truncateString("Absolutely Longer", 2), "Ab...", "should return \"Ab...\""); // passed