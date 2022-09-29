const log = console.log; // preference for writing shorter syntax for console.log()
//----------------------------------------------------------------------------------
const myFunc = require('./psw_verifier');

toTestValue = ["henkie1", "1234a","z","henkie1234","HENKhenk","HENK33$","1234", "", null];
describe('Testing all Utility functions',()=>{
    /* test(`1.Password '${ toTestValue[0] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunc.lessThan9Chars(toTestValue[0])).toBe(true);
        log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[0]));
    });
    test(`1.Password '${ toTestValue[1] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunc.lessThan9Chars(toTestValue[1])).toBe(true);
        log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[1]));
    });
    test(`1.Password '${ toTestValue[2] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunc.lessThan9Chars(toTestValue[2])).toBe(true);
        log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[2]));
    });
    test(`1.Password '${ toTestValue[3] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunc.lessThan9Chars(toTestValue[3])).toBe(true);
        log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[3]));
    });
    test(`1.Password '${ toTestValue[4] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunc.lessThan9Chars(toTestValue[4])).toBe(true);
        log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[4]));
    });
    test(`1.Password '${ toTestValue[5] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunc.lessThan9Chars(toTestValue[5])).toBe(true);
        log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[5]));
    });
    test(`1.Password '${ toTestValue[6] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunc.lessThan9Chars(toTestValue[6])).toBe(true);
        log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[6]));
    });
    test(`1.Password '${ toTestValue[7] }' => is shorter than 9 characters?: `, ()=>{
        expect(myFunc.lessThan9Chars(toTestValue[7])).toBe(true);
        log('the toTestValue was: ', myFunc.lessThan9Chars(toTestValue[7]));
    }); */

    /* describe('Password should not be null',()=>{
        test(`1.Password '${ toTestValue[0] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[0])).toBe(true);
            log('the toTestValue 1 was: ', myFunc.isNotNull(toTestValue[0]));
        });
        test(`2.Password '${ toTestValue[1] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[1])).toBe(true);
            log('the toTestValue 2 was: ', myFunc.isNotNull(toTestValue[1]));
        });
        test(`3.Password '${ toTestValue[2] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[2])).toBe(true);
            log('the toTestValue 3 was: ', myFunc.isNotNull(toTestValue[2]));
        });
        test(`4.Password '${ toTestValue[3] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[3])).toBe(true);
            log('the toTestValue 4 was: ', myFunc.isNotNull(toTestValue[3]));
        });
        test(`5.Password '${ toTestValue[4] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[4])).toBe(true);
            log('the toTestValue 5 was: ', myFunc.isNotNull(toTestValue[4]));
        });
        test(`6.Password '${ toTestValue[5] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[5])).toBe(true);
            log('the toTestValue 6 was: ', myFunc.isNotNull(toTestValue[5]));
        });
        test(`7.Password '${ toTestValue[6] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[6])).toBe(true);
            log('the toTestValue 7 was: ', myFunc.isNotNull(toTestValue[6]));
        });
        test(`8.Password '${ toTestValue[7] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[7])).toBe(true);
            log('the toTestValue 8 was: ', myFunc.isNotNull(toTestValue[7]));
        });
        test(`9.Password '${ toTestValue[8] }' => is not null?: `, ()=>{
            expect(myFunc.isNotNull(toTestValue[8])).toBe(true);
            log('the toTestValue 9 was: ', myFunc.isNotNull(toTestValue[8]));
        });
        
    }); */

    /* describe('Password has one or more uppercase characters',()=>{
        test(`1.Password '${ toTestValue[0] }' => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[0])).toBe(true);
            log('the toTestValue 1 was: ', myFunc.hasUpperCaseCharacters(toTestValue[0]));
        });
        test(`2.Password '${ toTestValue[1] }' => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[1])).toBe(true);
            log('the toTestValue 2 was: ', myFunc.hasUpperCaseCharacters(toTestValue[1]));
        });
        test(`3.Password '${ toTestValue[2] }' => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[2])).toBe(true);
            log('the toTestValue 3 was: ', myFunc.hasUpperCaseCharacters(toTestValue[2]));
        });
        test(`4.Password '${ toTestValue[3] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[3])).toBe(true);
            log('the toTestValue 4 was: ', myFunc.hasUpperCaseCharacters(toTestValue[3]));
        });
        test(`5.Password '${ toTestValue[4] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[4])).toBe(true);
            log('the toTestValue 5 was: ', myFunc.hasUpperCaseCharacters(toTestValue[4]));
        });
        test(`6.Password '${ toTestValue[5] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[5])).toBe(true);
            log('the toTestValue 6 was: ', myFunc.hasUpperCaseCharacters(toTestValue[5]));
        });
        test(`7.Password '${ toTestValue[6] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[6])).toBe(true);
            log('the toTestValue 7 was: ', myFunc.hasUpperCaseCharacters(toTestValue[6]));
        });
        test(`8.Password '${ toTestValue[7] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[7])).toBe(true);
            log('the toTestValue 8 was: ', myFunc.hasUpperCaseCharacters(toTestValue[7]));
        });
        test(`9.Password '${ toTestValue[8] }' => => has more than 1 uppercase Characters: `, ()=>{
            expect(myFunc.hasUpperCaseCharacters(toTestValue[8])).toBe(true);
            log('the toTestValue 9 was: ', myFunc.hasUpperCaseCharacters(toTestValue[8]));
        });
        
    }); */

    /*  describe('Password has one or more lowercase characters',()=>{
        test(`1.Password '${ toTestValue[0] }' => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[0])).toBe(true);
            log('the toTestValue 1 was: ', myFunc.hasLowerCaseCharacter(toTestValue[0]));
        });
        test(`2.Password '${ toTestValue[1] }' => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[1])).toBe(true);
            log('the toTestValue 2 was: ', myFunc.hasLowerCaseCharacter(toTestValue[1]));
        });
        test(`3.Password '${ toTestValue[2] }' => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[2])).toBe(true);
            log('the toTestValue 3 was: ', myFunc.hasLowerCaseCharacter(toTestValue[2]));
        });
        test(`4.Password '${ toTestValue[3] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[3])).toBe(true);
            log('the toTestValue 4 was: ', myFunc.hasLowerCaseCharacter(toTestValue[3]));
        });
        test(`5.Password '${ toTestValue[4] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[4])).toBe(true);
            log('the toTestValue 5 was: ', myFunc.hasLowerCaseCharacter(toTestValue[4]));
        });
        test(`6.Password '${ toTestValue[5] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[5])).toBe(true);
            log('the toTestValue 6 was: ', myFunc.hasLowerCaseCharacter(toTestValue[5]));
        });
        test(`7.Password '${ toTestValue[6] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[6])).toBe(true);
            log('the toTestValue 7 was: ', myFunc.hasLowerCaseCharacter(toTestValue[6]));
        });
        test(`8.Password '${ toTestValue[7] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[7])).toBe(true);
            log('the toTestValue 8 was: ', myFunc.hasLowerCaseCharacter(toTestValue[7]));
        });
        test(`9.Password '${ toTestValue[8] }' => => has more than 1 lowercase Characters: `, ()=>{
            expect(myFunc.hasLowerCaseCharacter(toTestValue[8])).toBe(true);
            log('the toTestValue 9 was: ', myFunc.hasLowerCaseCharacter(toTestValue[8]));
        });
        
    }); */

    /* describe('Password has 1 or more digits',()=>{
        test(`1.Password '${ toTestValue[0] }' => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[0])).toBe(true);
            log('the toTestValue 1 was: ', myFunc.hasDigit(toTestValue[0]));
        });
        test(`2.Password '${ toTestValue[1] }' => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[1])).toBe(true);
            log('the toTestValue 2 was: ', myFunc.hasDigit(toTestValue[1]));
        });
        test(`3.Password '${ toTestValue[2] }' => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[2])).toBe(true);
            log('the toTestValue 3 was: ', myFunc.hasDigit(toTestValue[2]));
        });
        test(`4.Password '${ toTestValue[3] }' => => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[3])).toBe(true);
            log('the toTestValue 4 was: ', myFunc.hasDigit(toTestValue[3]));
        });
        test(`5.Password '${ toTestValue[4] }' => => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[4])).toBe(true);
            log('the toTestValue 5 was: ', myFunc.hasDigit(toTestValue[4]));
        });
        test(`6.Password '${ toTestValue[5] }' => => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[5])).toBe(true);
            log('the toTestValue 6 was: ', myFunc.hasDigit(toTestValue[5]));
        });
        test(`7.Password '${ toTestValue[6] }' => => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[6])).toBe(true);
            log('the toTestValue 7 was: ', myFunc.hasDigit(toTestValue[6]));
        });
        test(`8.Password '${ toTestValue[7] }' => => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[7])).toBe(true);
            log('the toTestValue 8 was: ', myFunc.hasDigit(toTestValue[7]));
        });
        test(`9.Password '${ toTestValue[8] }' => => has at least 1 digit : `, ()=>{
            expect(myFunc.hasDigit(toTestValue[8])).toBe(true);
            log('the toTestValue 9 was: ', myFunc.hasDigit(toTestValue[8]));
        });
    }); */
});