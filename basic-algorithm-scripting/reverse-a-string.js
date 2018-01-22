// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.
// Input: string
// Output: string

function reverseString(str) {
  return str.split('').reverse().join('');
}

reverseString("hello");




function assertEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
      console.log("Passed");
  } else {
      console.log("FAILED [" + testName + "] expected: " + expected + "; but got: " + actual);
  }
}

assertEqual(reverseString("hello"), "olleh", "Should return a reversed string");
assertEqual(reverseString("Howdy"), "ydwoH", "Should return a reversed string");
assertEqual(reverseString("Greetings from Earth"), "htraE morf sgniteerG", "Should return a reversed string");