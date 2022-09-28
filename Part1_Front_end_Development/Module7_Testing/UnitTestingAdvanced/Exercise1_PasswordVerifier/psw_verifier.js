
//implementation of verifyPassword function:
const lessThan9Chars = password => password.length < 9;
const isNotNull = password => password !== null;
const hasUpperCaseCharacters = password => password.match(/[A-Z]/).length;

const verifyPassword = (password) =>{
    
}
module.exports = {
    lessThan9Chars,
    isNotNull,
    hasUpperCaseCharacters,
    
};

