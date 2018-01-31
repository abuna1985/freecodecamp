function largestOfFour(arr) {
  return arr.map(function(subArr) {
    return subArr.reduce(function(all, item) {
      return item > all ? item : all;
    }, 0);
  });
}