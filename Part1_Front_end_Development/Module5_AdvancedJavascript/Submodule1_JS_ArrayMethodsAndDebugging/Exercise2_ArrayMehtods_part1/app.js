



/* A Write a JavaScript function to add the word "cool" to an array of strings. Use the .push method.

Test Data (now extended, later on it will be shorter).
*/

console.log(`--------------------
Part A:
------------------`)
const addTheWordCool = function(array){
  array.push("cool");
  return array;
  
  //console.log()
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "amazing"]));
// result: ["nice", "awesome", "amazing", "cool"]


/*
B Write a JavaScript function that returns the number of elements in an array.
*/
//Test Data
console.log(`--------------------
Part B:
------------------`)
const amountOfElementsInArray = 
 arr => {
   return `Amount of items in array: ${arr.length}`;
 }
console.log(amountOfElementsInArray(['apples', 'pears', 'lemons'])); 
// 3

/*
C. Write a JavaScript function that returns the first element of an array. 
PS: At which number does an array start counting again?
*/
//Test Data
console.log(`--------------------
Part C:
------------------`)
const selectBelgiumFromBenelux = arr => {
  return arr[0];
}
console.log(selectBelgiumFromBenelux(["Belgium", "Netherlands", "Luxembourg"])); 
// result: "Belgium" 



/*
D. Write a JavaScript function to return the last element of an array.
*/
//Test Data
console.log(`--------------------
Part D:
------------------`)
const lastElementInArray = arr =>{
  return arr[arr.length - 1];
}
console.log(lastElementInArray(["Hare", "Guinea pig", "Chicken", "Turtle"])); 
// result: "Turtle"





/*
E. Write a JavaScript function to extract the first element from an array and return the remainder. Use .slice and the alternative option .splice. What is the difference between these functions? Hint: Mutability.


splice is changing the original array but slice doesn't.
Splice gives option to add And remove items from array but slice only copies the part of an array/string and returns as new array.

*/
//Test Data
console.log(`--------------------
Part E:
------------------`)

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

const impeachTrumpSlice = function(arr) {
   return arr.slice(1, 4);
}
const impeachTrumpSplice = function(arr) {
    arr.splice(0,1);
    return arr;
}


console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

/*
F. Write a simple JavaScript program to join all elements of the following array into a string (with spaces). 
ps: the word join is a big tip on what array method you should use.
*/
//Test Data
console.log(`--------------------
Part F:
------------------`)
const stringsTogether = arr => {
/*newArr = arr.toString();
console.log(`newArr = ${newArr}`)*/
  return arr.join(' ');
}
console.log(stringsTogether(['Winc', 'Academy', 'is', 'fun', ';-}'])) 
//result: "Winc Academy is fun ;-}"

/*
G. Write a function that combines 2 arrays ['array 1'] ['array2'] into 1 array ['array1', 'array2']
*/
//Test Data
console.log(`--------------------
Part G:
------------------`)
const combineArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
console.log(combineArrays(["hoi", "hey", "hallo"], [4, 5, 6]));

/*
 
// resultaat: [1,2,3,4,5,6]
*/



console.log(`=====================
SOLUTION:
====================`)

// A

const addTheWordCool1 = function (array) {
  array.push("cool");
  return array;
};

console.log("Add cool:", addTheWordCool1(["nice", "awesome", "tof"]));

// Alternate excercise A
const isArray1 = function (input) {
  return Array.isArray(input);
};

console.log(isArray1("Winc Winc, nudge nudge")); // false
console.log(isArray1([1, 2, 4, 0])); // true

//B
const amountOfElementsInArray1 = function (array) {
  return array.length;
};
console.log(amountOfElementsInArray1(["appels", "peren", "citroenen"])); // 3

// C
// Er zijn 3 verschillende oplossingen (misschien zelfs meer! Kun je er nog 1 bedenken?)
const selectBelgiumFromBenelux1 = function (array) {
  return array[0];
};

// OF
const selectBelgiumFromBeneluxShift1 = function (array) {
  return array.shift();
};

// OF
const selectBelgiumFromBeneluxSlice1 = function (array) {
  return array.slice(0, 1);
};

console.log(selectBelgiumFromBenelux1(["Belgie", "Nederland", "Luxemburg"])); // resultaat: "Belgie"
console.log(
  selectBelgiumFromBeneluxShift1(["Belgie", "Nederland", "Luxemburg"])
); // resultaat: "Belgie"
console.log(
  selectBelgiumFromBeneluxSlice1(["Belgie", "Nederland", "Luxemburg"])
); // resultaat: ["Belgie"]
// Let op! Slice retourneert dus een nieuwe array in plaats van alleen het element. Wil je dat?

// D
const lastElementInArray1 = function (array) {
  return array.pop();
};

const lastElementInArray2 = function (array) {
  return array[array.length - 1];
};
console.log(lastElementInArray1(["Haas", "Cavia", "Kip", "Schildpad"])); // resultaat: "Schildpad"
console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"])); // resultaat: "Schildpad"

// E
const presidents1 = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice1 = function (array) {
  //zoals je hieronder ziet muteert .slice methode niet de bestaande array, maar retourneert een nieuwe die we opslaan in een nieuwe variabele/
  const newArray = array.slice(1, 4);
  console.log("Nieuwe array:", newArray, "De onaangetaste array", array);
  return newArray;
};

const impeachTrumpSplice1 = function (array) {
  const removedElement = array.splice(0, 1);
  console.log(
    "removed element:",
    removedElement,
    "De mutated array, Trump is missing:",
    array
  );
  return array;
};

console.log(impeachTrumpSlice1(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice1(presidents)); // ["Obama", "Bush", "Clinton"]

// F
const stringsTogether1 = function (array) {
  return array.join(" ");
};

console.log(stringsTogether1(["Winc", "Academy", "is", "leuk", ";-}"]));
//resultaat: "Winc Academy is leuk ;-}"

// G
const combineArrays1 = function (array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays1([1, 2, 3], [4, 5, 6]));
console.log(combineArrays1(["hoi", "hey", "hallo"], [4, 5, 6]));
// result should be [1,2,3,4,5,6];



