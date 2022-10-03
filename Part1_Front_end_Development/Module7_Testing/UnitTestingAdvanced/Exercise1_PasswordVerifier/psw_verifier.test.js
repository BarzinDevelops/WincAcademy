const log = console.log; // preference for writing shorter syntax for console.log()
//----------------------------------------------------------------------------------
const myFunctions = require('./psw_verifier');

toTestValue = ["henkie1", "1234a","z","henkie1234","HENKhenk","HENK33$","1234", "", null, 'Z9','012345678'];

describe('Testing all Utility functions',()=>{
    /* test(`1.Password '${ toTestValue[0] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunctions.lessThan9Chars(toTestValue[0])).toBe(true);
        log('the toTestValue was: ', myFunctions.lessThan9Chars(toTestValue[0]));
    });
    test(`1.Password '${ toTestValue[1] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunctions.lessThan9Chars(toTestValue[1])).toBe(true);
        log('the toTestValue was: ', myFunctions.lessThan9Chars(toTestValue[1]));
    });
    test(`1.Password '${ toTestValue[2] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunctions.lessThan9Chars(toTestValue[2])).toBe(true);
        log('the toTestValue was: ', myFunctions.lessThan9Chars(toTestValue[2]));
    });
    test(`1.Password '${ toTestValue[3] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunctions.lessThan9Chars(toTestValue[3])).toBe(true);
        log('the toTestValue was: ', myFunctions.lessThan9Chars(toTestValue[3]));
    });
    test(`1.Password '${ toTestValue[4] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunctions.lessThan9Chars(toTestValue[4])).toBe(true);
        log('the toTestValue was: ', myFunctions.lessThan9Chars(toTestValue[4]));
    });
    test(`1.Password '${ toTestValue[5] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunctions.lessThan9Chars(toTestValue[5])).toBe(true);
        log('the toTestValue was: ', myFunctions.lessThan9Chars(toTestValue[5]));
    });
    test(`1.Password '${ toTestValue[6] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunctions.lessThan9Chars(toTestValue[6])).toBe(true);
        log('the toTestValue was: ', myFunctions.lessThan9Chars(toTestValue[6]));
    });
    test(`1.Password '${ toTestValue[7] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunctions.lessThan9Chars(toTestValue[7])).toBe(true);
        log('the toTestValue was: ', myFunctions.lessThan9Chars(toTestValue[7]));
    }); */

    /* describe('Password should not be null',()=>{
        test(`1.Password '${ toTestValue[0] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[0])).toBe(true);
            log('the toTestValue 1 was: ', myFunctions.isNotNull(toTestValue[0]));
        });
        test(`2.Password '${ toTestValue[1] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[1])).toBe(true);
            log('the toTestValue 2 was: ', myFunctions.isNotNull(toTestValue[1]));
        });
        test(`3.Password '${ toTestValue[2] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[2])).toBe(true);
            log('the toTestValue 3 was: ', myFunctions.isNotNull(toTestValue[2]));
        });
        test(`4.Password '${ toTestValue[3] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[3])).toBe(true);
            log('the toTestValue 4 was: ', myFunctions.isNotNull(toTestValue[3]));
        });
        test(`5.Password '${ toTestValue[4] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[4])).toBe(true);
            log('the toTestValue 5 was: ', myFunctions.isNotNull(toTestValue[4]));
        });
        test(`6.Password '${ toTestValue[5] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[5])).toBe(true);
            log('the toTestValue 6 was: ', myFunctions.isNotNull(toTestValue[5]));
        });
        test(`7.Password '${ toTestValue[6] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[6])).toBe(true);
            log('the toTestValue 7 was: ', myFunctions.isNotNull(toTestValue[6]));
        });
        test(`8.Password '${ toTestValue[7] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[7])).toBe(true);
            log('the toTestValue 8 was: ', myFunctions.isNotNull(toTestValue[7]));
        });
        test(`9.Password '${ toTestValue[8] }' => is not null?: `, ()=>{
            expect(myFunctions.isNotNull(toTestValue[8])).toBe(true);
            log('the toTestValue 9 was: ', myFunctions.isNotNull(toTestValue[8]));
        });
        
    }); */

    /* describe('Password has one or more uppercase characters',()=>{
        test(`1.Password '${ toTestValue[0] }' => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[0])).toBe(true);
            log('the toTestValue 1 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[0]));
        });
        test(`2.Password '${ toTestValue[1] }' => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[1])).toBe(true);
            log('the toTestValue 2 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[1]));
        });
        test(`3.Password '${ toTestValue[2] }' => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[2])).toBe(true);
            log('the toTestValue 3 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[2]));
        });
        test(`4.Password '${ toTestValue[3] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[3])).toBe(true);
            log('the toTestValue 4 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[3]));
        });
        test(`5.Password '${ toTestValue[4] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[4])).toBe(true);
            log('the toTestValue 5 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[4]));
        });
        test(`6.Password '${ toTestValue[5] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[5])).toBe(true);
            log('the toTestValue 6 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[5]));
        });
        test(`7.Password '${ toTestValue[6] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[6])).toBe(true);
            log('the toTestValue 7 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[6]));
        });
        test(`8.Password '${ toTestValue[7] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[7])).toBe(true);
            log('the toTestValue 8 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[7]));
        });
        test(`9.Password '${ toTestValue[8] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunctions.hasUpperCaseCharacters(toTestValue[8])).toBe(true);
            log('the toTestValue 9 was: ', myFunctions.hasUpperCaseCharacters(toTestValue[8]));
        });
        
    }); */

    /*  describe('Password has one or more lowercase characters',()=>{
        test(`1.Password '${ toTestValue[0] }' => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[0])).toBe(true);
            log('the toTestValue 1 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[0]));
        });
        test(`2.Password '${ toTestValue[1] }' => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[1])).toBe(true);
            log('the toTestValue 2 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[1]));
        });
        test(`3.Password '${ toTestValue[2] }' => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[2])).toBe(true);
            log('the toTestValue 3 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[2]));
        });
        test(`4.Password '${ toTestValue[3] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[3])).toBe(true);
            log('the toTestValue 4 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[3]));
        });
        test(`5.Password '${ toTestValue[4] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[4])).toBe(true);
            log('the toTestValue 5 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[4]));
        });
        test(`6.Password '${ toTestValue[5] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[5])).toBe(true);
            log('the toTestValue 6 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[5]));
        });
        test(`7.Password '${ toTestValue[6] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[6])).toBe(true);
            log('the toTestValue 7 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[6]));
        });
        test(`8.Password '${ toTestValue[7] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[7])).toBe(true);
            log('the toTestValue 8 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[7]));
        });
        test(`9.Password '${ toTestValue[8] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunctions.hasLowerCaseCharacter(toTestValue[8])).toBe(true);
            log('the toTestValue 9 was: ', myFunctions.hasLowerCaseCharacter(toTestValue[8]));
        });
        
    }); */

    /* describe('Password has 1 or more digits',()=>{
        test(`1.Password '${ toTestValue[0] }' => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[0])).toBe(true);
            log('the toTestValue 1 was: ', myFunctions.hasDigit(toTestValue[0]));
        });
        test(`2.Password '${ toTestValue[1] }' => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[1])).toBe(true);
            log('the toTestValue 2 was: ', myFunctions.hasDigit(toTestValue[1]));
        });
        test(`3.Password '${ toTestValue[2] }' => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[2])).toBe(true);
            log('the toTestValue 3 was: ', myFunctions.hasDigit(toTestValue[2]));
        });
        test(`4.Password '${ toTestValue[3] }' => => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[3])).toBe(true);
            log('the toTestValue 4 was: ', myFunctions.hasDigit(toTestValue[3]));
        });
        test(`5.Password '${ toTestValue[4] }' => => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[4])).toBe(true);
            log('the toTestValue 5 was: ', myFunctions.hasDigit(toTestValue[4]));
        });
        test(`6.Password '${ toTestValue[5] }' => => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[5])).toBe(true);
            log('the toTestValue 6 was: ', myFunctions.hasDigit(toTestValue[5]));
        });
        test(`7.Password '${ toTestValue[6] }' => => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[6])).toBe(true);
            log('the toTestValue 7 was: ', myFunctions.hasDigit(toTestValue[6]));
        });
        test(`8.Password '${ toTestValue[7] }' => => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[7])).toBe(true);
            log('the toTestValue 8 was: ', myFunctions.hasDigit(toTestValue[7]));
        });
        test(`9.Password '${ toTestValue[8] }' => => has at least 1 digit : `, ()=>{
            expect(myFunctions.hasDigit(toTestValue[8])).toBe(true);
            log('the toTestValue 9 was: ', myFunctions.hasDigit(toTestValue[8]));
        });
    }); */
});
describe('Testing 2 minimum required conditions:', ()=>{
    /* test('Testing if 3 or more conditions are met or not:', () => {
            expect(myFunctions.minimumRequired.passedConditionsCount(toTestValue[0])).toBe(true);
            log(`expect(myFunctions.minimumRequired.passedConditionsCount('henkie1')).toBe(true) =>`, 
                myFunctions.minimumRequired.passedConditionsCount(toTestValue[0]));

            expect(myFunctions.minimumRequired.passedConditionsCount(toTestValue[10])).toBe(false);
            log(`expect(myFunctions.minimumRequired.passedConditionsCount('012345678')).toBe(false) =>`, myFunctions.minimumRequired.passedConditionsCount(toTestValue[10]));
        }); */

    /* test('Testing if Password has 1 or more lowercase characters or not, AND if 3 or more conditions were met or not:', () => {
            expect(myFunctions.minimumRequired.minimunRequirementsPassed(toTestValue[9])).toBe(false);
            log(` expect(myFunctions.minimumRequired.minimunRequirementsPassed('Z9')).toBe(false) =>`, myFunctions.minimumRequired.minimunRequirementsPassed(toTestValue[9]));

            expect(myFunctions.minimumRequired.minimunRequirementsPassed(toTestValue[0])).toBe(true);
            log(` expect(myFunctions.minimumRequired.minimunRequirementsPassed('henkie1')).toBe(true) =>`, myFunctions.minimumRequired.minimunRequirementsPassed(toTestValue[0]));
        }); */
});
