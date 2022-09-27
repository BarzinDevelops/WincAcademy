const userInput = document.getElementById('user-input');
const verifyBtn = document.getElementById('verify-btn');
const testFeedback = document.getElementById('test-feedback');
let inputValue = null;


verifyBtn.addEventListener('click',() =>{
    inputValue = userInput.value;
    console.log('inputValue',inputValue);
    
}); 


exports = {
    inputValue,
    testFeedback,
};