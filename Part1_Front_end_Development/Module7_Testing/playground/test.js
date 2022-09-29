
const log = console.log; // preference for writing shorter syntax for console.log()
password = ["henkie1", "1234a","z","henkie1234","HENKhenk","HENK33$","1234", "", null, 'bArzin'];
password2 = "VoogGekkieesS";
password3 = "HENKhenk";
password4 = "HwNK33$";
password5 = "henkiRe1234";


const hasUpperCaseCharacters = password => 
                                password.split('').filter(char => char.match(/[A-Z]/)).length >= 1;

log('hasUpperCaseCharacters',hasUpperCaseCharacters(password5));

const hasLowerCaseCharacter  = password => 
                                password.split('').filter(char => char.match(/[a-z]/)).length >= 1;

log('hasLowerCaseCharacter',hasLowerCaseCharacter (password4));

const newPass = (name,pass) => {
    // log(pass)
    log(name,pass.match(/[A-Z]/)); 
    log(name,
        pass
        .split('')
        .filter(char => char.match(/[A-Z]/))
        .length
    
    ); 
    // log(name,pass.match(/[A-Z]/).length, '\n--------\n');
    
}


// log('newPass =', newPass(password));
// log('newPass =', newPass('password2:', password2));
// log('newPass =', newPass('password3:', password3));
log('newPass =', newPass('password4:', password4));
log('newPass =', newPass('password5:', password5));

// const hasUpperCaseCharacters = password => password.match(/[A-Z]/).length;
// const hasUpperCaseCharacters = password => password.match(/[A-Z]/).length;