const { array } = require("yargs");

const log = console.log;  // my own preference use of console.log()
const myTddFunctions = {
    addOne: (numArr)=> numArr.map(number => number +1),
    getWordLengths: (wordArr) => wordArr.map(word => word.length),
    findNeedle: (wordsToSearch, searchTerm) => wordsToSearch.findIndex((word) => word === searchTerm)
};


module.exports = myTddFunctions;