
//implementation of verifyPassword function:
const lessThan9Chars = password => password.length < 9;
const isNotNull = password => password !== null;
const hasUpperCaseCharacters = password => password.split('').filter(char => char.match(/[A-Z]/)).length >= 1;
const hasLowerCaseCharacter = password => password.split('').filter(char => char.match(/[a-z]/)).length >= 1;

const verifyPassword = (password) =>{
    
}
module.exports = {
    lessThan9Chars,
    isNotNull,
    hasUpperCaseCharacters,
    hasLowerCaseCharacter,
    
};

