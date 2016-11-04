function mostFrequentWord(words) {
  var counter = {};
  words.forEach(function(item) {
    if (item in counter === true) {
      counter.item += 1;
    }
    else {
      counter.item = 1;
    }
  });
  var maxValue = 0
  var maxKey = []
  Object.keys(counter).forEach(function(key) {
    if (counter.key > maxValue) {
      maxValue = counter.key;
    }
  return maxValue;
  });
  Object.keys(counter).forEach(function(key) {
    if (counter.key == maxValue) {
      maxKey.push(key);
    }
    return maxKey;
  });
  maxKey.sort();
  return maxKey[0];
}