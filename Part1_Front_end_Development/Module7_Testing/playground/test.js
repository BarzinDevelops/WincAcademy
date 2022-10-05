const log = console.log;


let password = 'hLnkie1';
let password2 = '2allo';
const matchingCharsLength = (password, toCheckRegex) =>{
    return password.split('').filter(char => char.match(toCheckRegex)).length;
}
// log(`matchingCharsLength(password,'[a-z]') => `, matchingCharsLength(password,/[a-z]/));
// log(`matchingCharsLength(password,'[a-z]') => `, matchingCharsLength(password,/[A-Z]/));
//Create Utility functions for eacht test case:
const UtilityFunctions =  {
    lessThan9Chars : password => UtilityFunctions.isNotNull(password) && password.length < 9,
    isNotNull : password => password !== null,
    hasUpperCaseCharacters : password => UtilityFunctions.isNotNull(password) && matchingCharsLength(password,/[A-Z]/) >= 1,
    hasLowerCaseCharacter : password => UtilityFunctions.isNotNull(password) && matchingCharsLength(password,/[a-z]/) >= 1,
    hasDigit : password => UtilityFunctions.isNotNull(password) && password.split('').filter(char => char.match(/\d/)).length >= 1
};

// let password = 'nulGl';
// let password2 = '2allo';
// log('UtilityFunctions.hasUpperCaseCharacters(password) => ', UtilityFunctions.hasUpperCaseCharacters(password));
// log('UtilityFunctions.hasUpperCaseCharacters(password) => ', UtilityFunctions.hasUpperCaseCharacters(password2));

let capitals = password.match(/[A-Z]/g);

log(`Password: ${password}  type => ${typeof (password)}
password.match(/[A-Z]/g) ==> ${capitals} type => ${typeof (capitals)}
password.match(/[A-Z]/).length  => ${capitals.length}  type => ${typeof (capitals.length)}
password.match(/[A-Z]/).length > 2  => ${capitals.length > 2} type => ${typeof (capitals.length > 2)}
`);

// make an array of all condition results:
const conditionsResults = password => 
    [
        UtilityFunctions.lessThan9Chars(password),
        UtilityFunctions.isNotNull(password),
        UtilityFunctions.hasUpperCaseCharacters(password),
        UtilityFunctions.hasLowerCaseCharacter(password),
        UtilityFunctions.hasDigit(password)
    ];

// create function that checks if minimum 3 requirements are met:
const coditionsCount = {
    // count condition results that were met:
    passedConditions: password => conditionsResults(password).filter(condition => condition === true).length > 2
}


const verifyPassword = (password) =>{
    const result = coditionsCount.passedConditions(password) && UtilityFunctions.hasLowerCaseCharacter(password);

    return result;
}

// let password = null;
// log('verifyPassword(password) => ', verifyPassword(null));