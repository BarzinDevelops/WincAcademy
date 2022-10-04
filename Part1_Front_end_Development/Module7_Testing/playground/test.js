
const log = console.log;

const someArr = ['hiloo', 'NaiLedIt', 'L@coobaniTa']

let myRe = new RegExp('hallLooo345');
const re2 = /l+/i;

const re3 = new RegExp(re2);

const result = someArr.filter(item => item.match(re2));

log('result', result);


// log('myRe', myRe)