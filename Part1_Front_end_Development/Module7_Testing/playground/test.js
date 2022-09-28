
const log = console.log; // preference for writing shorter syntax for console.log()
password = ["henkie1", "1234a","z","henkie1234","HENKhenk","HENK33$","1234", "", null, 'bArzin'];

password.forEach(pass => {
    if(pass){
        if(pass.match(/[A-Z]/)){
            for(let i in pass){
                log('item:',pass,'letters found', i);
            }
        }
        // console.log(pass);
        // console.log('Match',pass.match(/[A-Z]/))
    }
    
})
// const hasUpperCaseCharacters = password => password.match(/[A-Z]/).length;