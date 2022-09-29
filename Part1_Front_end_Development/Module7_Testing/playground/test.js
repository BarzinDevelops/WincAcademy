
const log = console.log; // preference for writing shorter syntax for console.log()
password = ["henkie1", "1234a","z","henkie1234","HENKhenk","HENK33$","1234", "", null, 'bArzin'];


password2 = "VoogGekkieesS";
password3 = "HENKhenk";
password4 = "HwNK33$";
password5 = "henkiRe1234";


/* const hasUpperCaseCharacters = password => 
                                password.split('').filter(char => char.match(/[A-Z]/)).length >= 1;

log('hasUpperCaseCharacters',hasUpperCaseCharacters(password5));

const hasLowerCaseCharacter  = password => 
                                password.split('').filter(char => char.match(/[a-z]/)).length >= 1;

log('hasLowerCaseCharacter',hasLowerCaseCharacter (password4)); */


const hasDigit = password => 
                                password.split('').filter(char => char.match(/\d/)).length >= 1;

log('hasDigit',hasDigit (password5));

const newPass = (name,pass) => {
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
};
// const newPass = (name,pass) => {
//     log(name,pass.match(/[A-Z]/)); 
//     log(name,
//         pass
//         .split('')
//         .filter(char => char.match(/[A-Z]/))
//         .length
//     );  
// };


// log('newPass =', newPass(password));
log(newPass('password2:', password5));
// log('newPass =', newPass('password3:', password3));
// log('newPass =', newPass('password4:', password4));
// log('newPass =', newPass('password5:', password5));

// const hasUpperCaseCharacters = password => password.match(/[A-Z]/).length;
// const hasUpperCaseCharacters = password => password.match(/[A-Z]/).length;