const log = console.log;  // my own preference use of console.log()
const myTddFunc = require('./functionsTDD');

// 1. testing ->  addOne function:
/* test("Add 1 to each item in myArray", function() {
    const myArray = [31, 57, 12, 5];

    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    const output = myTddFunc.addOne(myArray);
    expect(output).toEqual(expected);
    expect(myArray).toEqual(unchanged);

    // My own test log to see the real values of each received and to compare value:
    log(`
        is output: [${output}] equal to expected: [${expected}] ?
        is myArray: [${myArray}] equal to unchanged: [${unchanged}] ?
    `);
  }); */

// 2.  testing ->  getWordLengths() function:
    test("Get word lengths", function() {
      const words = ["sun", "potato", "roundabout", "pizza"];
      const expected = [3, 6, 10, 5];
      const output = myTddFunc.getWordLengths(words);
      expect(output).toEqual(expected);
      
      // My own test log to see the real values of each received and to compare value:
      log(`is output: [${output}] equal to expected: [${expected}] ?`);
    });