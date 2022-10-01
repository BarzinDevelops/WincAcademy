
//Create Utility functions for eacht test case:
const lessThan9Chars = password => password.length < 9;
const isNotNull = password => password !== null;
const hasUpperCaseCharacters = password => password.split('').filter(char => char.match(/[A-Z]/)).length >= 1;
const hasLowerCaseCharacter = password => password.split('').filter(char => char.match(/[a-z]/)).length >= 1;
const hasDigit = password => password.split('').filter(char => char.match(/\d/)).length >= 1;

// make an array of all condition results:
const conditionsResults = password => [
                            lessThan9Chars(password),
                            isNotNull(password),
                            hasUpperCaseCharacters(password),
                            hasLowerCaseCharacter(password),
                            hasDigit(password)
                        ];



const verifyPassword = (password) =>{
    
}
module.exports = {
    conditionsResults,
    
};

