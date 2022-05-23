/* Part 1: Add a click event to a button
- Use a click event and "attach" the click event to the button.
- When the button is clicked, give an alert: "button clicked" 
  (just like you saw in the video). 
*/

const myBtn = document.getElementById("mybutton");

myBtn.addEventListener("click", (e) => {
  alert("Button clicked!.");
});

//---------------------------------------------------------------------
/* Part 2: Add class

Add a second button to your HTML that says "Change Background".
Give the body tag the class "blue-background".

Create a new function that includes the following functionalities:
    - Add a click event to the new button.
    - When the change-background-button is clicked you will add 
       the class "red-background" to your body element.

After clicking the button, your body tag's class will look like 
 this: class="blue-background red-background". 
Due to the order of the CSS in the CSS file, 
the last style in your stylesheet will be applied. 
In this case, your stylesheet first defines the blue background and then 
the red background. The body now has 2 styles, of which the red background 
will now be applied.
----------------------------------------------------------------------*/
const bgColorBtn = document.getElementById("change-bg-btn");

/* const changeColor = function () {
  document.body.classList.add("red-background");
}; */

// bgColorBtn.addEventListener("click", changeColor);

//---------------------------------------------------------------------

/* Part 3: Toggle class

We are going to change the changeColor function so that the background color 
also changes back to blue when the button is clicked. 
The background color is then "toggled", in other words: 
put on and removed again and put back on, etc.
Change the name of the function from changeColor to toggleColor.
Instead of adding an extra class "red-background" to the classlist 
we are going to toggle the class. Use Google to find out how to do this. 
Hint: toggle. 
*/

const toggleColor = function () {
  document.body.classList.toggle("red-background");
  bgColorBtn.classList.toggle("blue-background");
};

bgColorBtn.addEventListener("click", toggleColor);

//---------------------------------------------------------------------
