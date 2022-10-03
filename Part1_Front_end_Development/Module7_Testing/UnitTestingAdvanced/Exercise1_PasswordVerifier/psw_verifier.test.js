const log = console.log; // preference for writing shorter syntax for console.log()
//----------------------------------------------------------------------------------
const myFunctions = require('./psw_verifier');
const utilFunctions = myFunctions.UtilityFunctions;


toTestValue = ["henkie1", "1234a","z","henkie1234","HENKhenk","HENK33$","1234", "", null, 'Z9','012345678'];

describe('Testing all Utility functions',()=>{
    describe('Password is shorter than 9 characters',()=>{
        test(`1.Test if the argument IS shorter than 9 characters. `, ()=>{
            expect(utilFunctions.lessThan9Chars(toTestValue[0])).toBe(true);
            // log(`myFunctions.lessThan9Chars('henkie1')).toBe(true) => `, utilFunctions.lessThan9Chars(toTestValue[0]));
        });
        test(`2.Test that the argument is NOT shorter than 9 characters. `, ()=>{
            expect(utilFunctions.lessThan9Chars(toTestValue[3])).toBe(false);
            // log(`myFunctions.lessThan9Chars('henkie1234')).toBe(false) => `, utilFunctions.lessThan9Chars(toTestValue[3]));
        });
    });

    describe('Password should not be null',()=>{
        test(`1.Testing if argument doesn't contain 'null'. `, ()=>{
            expect(utilFunctions.isNotNull(toTestValue[0])).toBe(true);
            // log(`utilFunctions.isNotNull('henkie1').toBe(true) => `, utilFunctions.isNotNull(toTestValue[0]));
        });
        test(`2.Testing if argument does contain 'null'. `, ()=>{
            expect(utilFunctions.isNotNull(toTestValue[8])).toBe(false);
            // log(`utilFunctions.isNotNull(null).toBe(false) => `, utilFunctions.isNotNull(toTestValue[8]));
        });
    });
    
    describe('Password has one or more uppercase characters.',()=>{
        test(`1.Testing if argument contains one or more uppercase characters. `, ()=>{
            expect(utilFunctions.hasUpperCaseCharacters(toTestValue[4])).toBe(true);
            // log(`utilFunctions.hasUpperCaseCharacters(HENKhenk).toBe(true) => `, utilFunctions.hasUpperCaseCharacters(toTestValue[4]));
        });
        test(`2.Testing if argument DOESN'T contains any uppercase characters. `, ()=>{
            expect(utilFunctions.hasUpperCaseCharacters(toTestValue[0])).toBe(false);
            // log(`utilFunctions.hasUpperCaseCharacters(henkie1).toBe(false) => `, utilFunctions.hasUpperCaseCharacters(toTestValue[0]));
        });
    });


    describe('Password has one or more lowercase characters.',()=>{
        test(`1.Testing if argument contains one or more lowercase characters. `, ()=>{
            expect(utilFunctions.hasLowerCaseCharacter(toTestValue[4])).toBe(true);
            // log(`utilFunctions.hasLowerCaseCharacter(HENKhenk).toBe(true) => `, utilFunctions.hasLowerCaseCharacter(toTestValue[4]));
        });
        test(`2.Testing if argument DOESN'T contains any lowercase characters. `, ()=>{
            expect(utilFunctions.hasLowerCaseCharacter(toTestValue[5])).toBe(false);
            // log(`utilFunctions.hasLowerCaseCharacter(HENK33$).toBe(false) => `, utilFunctions.hasLowerCaseCharacter(toTestValue[5]));
        });
    });

    describe('Password has 1 or more digits.',()=>{
        test(`1.Testing if argument contains one or more digits. `, ()=>{
            expect(utilFunctions.hasDigit(toTestValue[5])).toBe(true);
            log(`utilFunctions.hasDigit(HENK33$).toBe(true) => `, utilFunctions.hasDigit(toTestValue[5]));
        });
        test(`2.Testing if argument DOESN'T contains any digits. `, ()=>{
            expect(utilFunctions.hasDigit(toTestValue[4])).toBe(false);
            log(`utilFunctions.hasDigit(HENKhenk).toBe(false) => `, utilFunctions.hasDigit(toTestValue[4]));
        });
    });

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
