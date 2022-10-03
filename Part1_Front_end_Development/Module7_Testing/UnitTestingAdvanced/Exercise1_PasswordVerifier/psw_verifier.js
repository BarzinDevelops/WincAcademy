const UtilityFunctions =  {
    lessThan9Chars : password => password.length < 9,
    isNotNull : password => password !== null,
    hasUpperCaseCharacters : password => password.split('').filter(char => char.match(/[A-Z]/)).length >= 1,
    hasLowerCaseCharacter : password => password.split('').filter(char => char.match(/[a-z]/)).length >= 1,
    hasDigit : password => password.split('').filter(char => char.match(/\d/)).length >= 1
};




//Create Utility functions for eacht test case:
/* const lessThan9Chars = password => password.length < 9;
const isNotNull = password => password !== null;
const hasUpperCaseCharacters = password => password.split('').filter(char => char.match(/[A-Z]/)).length >= 1;
const hasLowerCaseCharacter = password => password.split('').filter(char => char.match(/[a-z]/)).length >= 1;
const hasDigit = password => password.split('').filter(char => char.match(/\d/)).length >= 1;
 */
// make an array of all condition results:
const conditionsResults = password => [
                            lessThan9Chars(password),
                            isNotNull(password),
                            hasUpperCaseCharacters(password),
                            hasLowerCaseCharacter(password),
                            hasDigit(password)
                        ];

// create function that checks if all mendatory requirements are met:
const minimumRequired = {

    /* Minimum requirements:
        1. At least 3 of the above conditions are true
        2. Condition 4 (=Password has 1 or more lowercase characters) is true 
        (so that must always be true)
    */
    // count condition results that were met:
    passedConditionsCount: password => conditionsResults(password).filter(condition => condition === true).length > 2,
    
    /* If requirement both (requirement 1 and 2) are met, 
        return true and false otherwise:  */
    minimunRequirementsPassed: password => (conditionsResults(password)[3]) ? true : false

}

const verifyPassword = (password) =>{
    
}
module.exports = {
    UtilityFunctions,
    minimumRequired,
    
};

