
//Create Utility functions for eacht test case:
const UtilityFunctions =  {
    isNotNull : password => password !== null,
    lessThan9Chars : password => UtilityFunctions.isNotNull(password) && password.length < 9,
    hasUpperCaseCharacters : password => UtilityFunctions.isNotNull(password) && password.split('').filter(char => char.match(/[A-Z]/g)).length >= 1,
    hasLowerCaseCharacter : password => UtilityFunctions.isNotNull(password) && password.split('').filter(char => char.match(/[a-z]/)).length >= 1,
    hasDigit : password => UtilityFunctions.isNotNull(password) && password.split('').filter(char => char.match(/\d/)).length >= 1
};

// make an array of all condition results:
const conditionsResults = password => 
    [
        UtilityFunctions.isNotNull(password),
        UtilityFunctions.lessThan9Chars(password),
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
    return coditionsCount.passedConditions(password) && UtilityFunctions.hasLowerCaseCharacter(password)
}
module.exports = {
    UtilityFunctions,
    coditionsCount,
    verifyPassword
};

