const addOne = function(numbers) {
    return numbers.map(number => number + 1);
  };
  
  const findNeedle = function(words, wordToBeFound) {
    return words.indexOf(wordToBeFound);
  };

  const getWordLengths = function(someWords) {
    return someWords.map(word => word.length);
  };