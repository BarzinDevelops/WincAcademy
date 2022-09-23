const log = console.log;
/* Truthy and Falsy:

JavaScript uses "type coercion" in Boolean contexts.
Type coercion:
        is the automatic or implicit conversion of values 
        from one data type to another (such as strings to numbers). 
        Type conversion is similar to type coercion because they both 
        convert values from one data type to another with one key difference 
        — type coercion is implicit whereas type conversion can be
        either implicit or explicit
Examples of truthy values in JavaScript 
(which will be coerced to true in boolean contexts, and thus execute the if block):
    1) true
    2) {}
    3) []
    4) "0"  => string of zero  and  NOT the number 0
    5) "false"  => string of false  and  NOT false 
    6) new Date()
    7) negative numbers  (EXEPT -0  -> negative 0 which is still 0)
    8) Infinity or negative Infinity (-Infinity)
-----------------------------------------------------------------
 These values always get converted to Falsy by JS:
    1) false
    2) 0 or -0 or 0n
    3) " "  or ' ' or ` ` => empty strings
    4) null  =>  the absence of any value.
    5) undefined 
    6) NaN  =>  not a number.
-----------------------------------------------------------------
*/


// these are weired parts of javascript (when type coercion happens)
log('[] + []', [] + []);  // wil return empty string 
log('[] +  {}', [] +  {});  // wil return [Object Object] 
log('{} + []', {} + []);  // wil also return [Object Object]
log('{} + {}', {} + {});  // will return [Object Object] [Object Object]
