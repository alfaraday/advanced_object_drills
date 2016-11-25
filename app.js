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
  var result = stream1;
  for (var i=0; i < stream1.length; i++) {
    for (var x=0; x<stream2.length; x++) {
      if (stream1[i].id === stream2[x].id) {
        Object.assign(result[i], stream2[x]);
      }
    }
  }
  return result;
}

//Recipe Factory
function recipeFactory(name, ingredients, steps) {
  var recipe = {
    name: name,
    ingredients: ingredients,
    steps: steps,
    stepsHtml: function() {
      var sHtml = "<ol>";
      for (var i=0; i<= steps.length; i++) {
        sHtml += ("<li>"+steps[i]+"</li>")
      }
      sHtml += "</ol>";
      return sHtml;
    },
    ingredientsHtml: function () {
      var iHtml = "";
      for (var i=0; i< (ingredients.length-1); i++) {
        iHtml += (" "+ingredients[i]+",");
      }
      iHtml += (" "+ingredients[ingredients.length-1])
      return iHtml;
    },
  }
  return recipe;
}