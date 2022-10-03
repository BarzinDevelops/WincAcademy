const log = console.log;
/* const log = console.log; // preference for writing shorter syntax for console.log()
    password = ["henkie1", "1234a","z","henkie1234","HENKhenk","HENK33$","1234", "", null, 'bArzin'];


    password2 = "VoogGekkieesS";
    password3 = "HENKhenk";
    password4 = "HwNK33$";
    password5 = "henkiRe1234";
 */

/* const hasUpperCaseCharacters = password => 
                                password.split('').filter(char => char.match(/[A-Z]/)).length >= 1;

log('hasUpperCaseCharacters',hasUpperCaseCharacters(password5));

const hasLowerCaseCharacter  = password => 
                                password.split('').filter(char => char.match(/[a-z]/)).length >= 1;

log('hasLowerCaseCharacter',hasLowerCaseCharacter (password4)); */
/* const hasDigit = password => 
                                password.split('').filter(char => char.match(/\d/)).length >= 1;

log('hasDigit',hasDigit (password5)); */
/* const newPass = (name,pass) => {
    if(pass.match(/\d/))
    {
        log(name, pass.match(/\d/)); 
        log(name,
            pass
            .split('')
            .filter(char => char.match(/\d/))
            .length
        );
    } else log(name, `doesn't contain any digits!! => ${pass}`);
    return ''
}; */
/* const newPass = (name,pass) => {
        log(name,pass.match(/[A-Z]/)); 
        log(name,
            pass
            .split('')
            .filter(char => char.match(/[A-Z]/))
            .length
        );  
    }; */


// log('newPass =', newPass(password));
// log(newPass('password2:', password5));
// log('newPass =', newPass('password3:', password3));
// log('newPass =', newPass('password4:', password4));
// log('newPass =', newPass('password5:', password5));

// const hasUpperCaseCharacters = password => password.match(/[A-Z]/).length;
// const hasUpperCaseCharacters = password => password.match(/[A-Z]/).length;
//-------------------------------


/* 
pass1 = 'gGeD'; //returnt null
pass2 = 'HoOfDLeTtErS'; //returnt['HoOfDLeTtErS']
console.log(pass1.match(/([A-Z])\w{3,}/g));
console.log(pass2.match(/([A-Z])\w{11,}/g));
console.log(pass2.match(/([A-Z])\w{12,}/g)); */


/* 
//implementation of verifyPassword function:
const lessThan9Chars = password => password.length < 9;
const isNotNull = password => password !== null;
const hasUpperCaseCharacters = password => password.split('').filter(char => char.match(/[A-Z]/)).length >= 1;
const hasLowerCaseCharacter = password => password.split('').filter(char => char.match(/[a-z]/)).length >= 1;
const hasDigit = password => password.split('').filter(char => char.match(/\d/)).length >= 1;

const minimumRequired = (pass) =>{
    const conditionsResults = [lessThan9Chars(pass),
                                isNotNull(pass),
                                hasUpperCaseCharacters(pass),
                                hasLowerCaseCharacter(pass),
                                hasDigit(pass)];
    log('conditions Results:', conditionsResults);

    // check if 3 out of all conditions are met:
    const passedConditionsCount = conditionsResults.filter(condition => condition === true).length;
    log('true conditions count:', passedConditionsCount);
    log('\t!!passed conditions count?',passedConditionsCount >= 3);
    

    // check if Condition 4 (=Password has 1 or more lowercase characters) is true:
    log('\t!!Password has 1 or more lowercase characters?',  hasLowerCaseCharacter(pass))

    // now combine minimum requirement 1 and 2  and 
    // return true if both are true and false otherwise:
    // const minimumRequiredResult = 
    //     (passedConditionsCount >= 3 && conditionsResults[3]) ? true : false;
    
    // log('minimumRequiredResult',minimumRequiredResult)
    return (passedConditionsCount >= 3 && conditionsResults[3]) ? true : false;
}


// minimumRequired('GGGGf');
log('Minimum Required Result1 =>',minimumRequired('HENK33$'))
log('Minimum Required Result2 =>',minimumRequired('henkie1234'))

 */



//implementation of verifyPassword function:
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




// create function that checks if all mendatory requirements are met:
const minimumRequired = {

    // count condition results that were met:
    passedConditionsCount: password => conditionsResults(password).filter(condition => condition === true).length > 2,
    
    /* If requirement both (requirement 1 and 2) are met, 
        return true and false otherwise:  */
    minimunRequirementsPassed: password => (conditionsResults(password)[3]) ? true : false
}


const password = '123456F678';


log('conditionsResults',conditionsResults(password));
log('conditionsResults(password)[0]',conditionsResults(password)[0]);
log('conditionsResults(password)[1]',conditionsResults(password)[1]);
log('conditionsResults(password)[2]',conditionsResults(password)[2]);
log('conditionsResults(password)[3]',conditionsResults(password)[3]);
log('conditionsResults(password)[4]',conditionsResults(password)[4]);

log('passedConditionsCount',minimumRequired.passedConditionsCount(password));
log('minimunRequirementsPassed',minimumRequired.minimunRequirementsPassed(password));

// log('testfunction ', minimumRequired.testFunc(password));
















