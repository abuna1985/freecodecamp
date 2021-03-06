// Challenge: Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Input: Integer
// Output: Integer

function factorialize(num) {
  var total = 1;
  for(var i = 1; i <= num; i++){
    total *= i;
  }
  return total;
}

factorialize(5);

function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
      console.log(testName + " has passed!");
  } else {
      console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
  }
}

assertEqual(typeof factorialize(5), "number", "Should return a integer"); // Passed
assertEqual(factorialize(10), 3628800, "Should return 3628800"); // Passed
assertEqual(factorialize(20), 2432902008176640000, "Should return 2432902008176640000"); // Passed
assertEqual(factorialize(0), 1, "Should return 1"); // Passed