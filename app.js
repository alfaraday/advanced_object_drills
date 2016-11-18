//Most Frequent Word
function mostFrequentWord(words) {
  var counter = {};
  for (var i=0; i<=words.length; i++){
    if (words[i] in counter) {
      counter[words[i]] += 1;
    }
    else {
      counter[words[i]] = 1;
    }
  }
  var maxKey = Object.keys(counter)[0];
  var maxCount = counter[maxKey];
  for (var word in counter) {
    if (counter[word] > maxCount) {
      maxKey = word;
      maxCount  = counter[word];
    }
  }
  return maxKey;
}

//Data Merge
function mergeDataStreams(stream1, stream2) {
  if (stream1.id === stream2.id) {
    var s2Keys = Object.keys(stream2);
    for (var i=0; i<= s2Keys.length; i++) {
      stream1[s2Keys[i]] = stream2[s2Keys[i]];
    }
  }
  console.log(stream1);
  return stream1;
}