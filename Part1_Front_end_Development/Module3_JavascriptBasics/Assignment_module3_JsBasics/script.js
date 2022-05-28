// getting needed DOM nodes:
const mainWrapper = document.getElementById("main-wrapper");
const mainBtn = document.getElementById("main-btn");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const itemsWrapper = document.getElementById("items-wrapper");
let allListItems = document.querySelectorAll(".items");
let chosenBgColorText = document.querySelector("#chosen-bg-color-text");
const radioBtns = document.querySelectorAll(".radios");
const myColorsArr = [
  "white",
  "green",
  "yellow",
  "purple",
  "tomato",
  "lightblue",
];
// Current active background color:
chosenBgColorText.textContent = "White";
// ------------ Function Expression declarations ---------------
const activeMenu = function () {
  menu.classList.remove("inactive-menu");
  menu.classList.add("active-menu");
};
const inActiveMenu = function () {
  menu.classList.add("inactive-menu");
  menu.classList.remove("active-menu");
};
const toggleMenu = function () {
  menu.classList.toggle("inactive-menu");
  menu.classList.toggle("active-menu");
};

//Keyboard keys 1-5 activate colors in menu from top-bottom
// also activates chosen color radio-button in the menu.
const keyboardChoise = function (itemNumber) {
  allListItems[itemNumber].click();
  inActiveMenu();
};
//---------------------------------------------------------------------
mainBtn.addEventListener("mouseenter", activeMenu);
mainBtn.addEventListener("click", toggleMenu);
mainBtn.addEventListener("mouseleave", inActiveMenu);
menu.addEventListener("mouseleave", inActiveMenu);
menu.addEventListener("mouseenter", activeMenu);

/* ---------------------------------------------------------------------------- */
/* This function is used to get backgroundcolor value. 
Because this can be different on each browser, this function 
will check all possibilities and return the right rgb value.*/
const getBgColor = function (element) {
  if (element.currentStyle) return element.currentStyle.backgroundColor;
  if (window.getComputedStyle) {
    var elementStyle = window.getComputedStyle(element, "");
    if (elementStyle) return elementStyle.getPropertyValue("background-color");
  }
  // Return 0 if both methods failed.
  return 0;
};

// ---------------------------------------------------------------------
/* loop through each radio button and activate click-event of 
   corresponding li-color */

radioBtns.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    if (radio.classList.contains("item-radio1")) {
      allListItems[0].click();
    } else if (radio.classList.contains("item-radio2")) {
      allListItems[1].click();
    } else if (radio.classList.contains("item-radio3")) {
      allListItems[2].click();
    } else if (radio.classList.contains("item-radio4")) {
      allListItems[3].click();
    } else if (radio.classList.contains("item-radio5")) {
      allListItems[4].click();
    } else if (radio.classList.contains("item-radio6")) {
      allListItems[5].click();
    }
  });
});
//-------------------------------------------------------------------------
/* loop through each li to set bg color as well as bg color name on each li.
   Also activate radio-button corresponding to the clicked color item (as feedback).
 */
allListItems.forEach((item, i) => {
  item.style.backgroundColor = myColorsArr[i];
  item.textContent =
    myColorsArr[i].charAt(0).toUpperCase() + myColorsArr[i].slice(1);

  item.addEventListener("click", () => {
    toggleMenu();
    let radioBtn = document.querySelector(`.item-radio${i}`);
    radioBtn.checked = true; // activates radio button of chosen color
    mainWrapper.style.backgroundColor = getBgColor(item);
    chosenBgColorText.textContent = item.textContent;
  });
  i++;
});

/* Captures keycode on keyUp and calls keyboardChoise() function
so the right background color and corresponding radio-button
gets activated. */
document.addEventListener("keyup", (e) => {
  if (e.code === "Digit1") {
    keyboardChoise(0);
  }
  if (e.code === "Digit2") {
    keyboardChoise(1);
  }
  if (e.code === "Digit3") {
    keyboardChoise(2);
  }
  if (e.code === "Digit4") {
    keyboardChoise(3);
  }
  if (e.code === "Digit5") {
    keyboardChoise(4);
  }
  if (e.code === "Digit6") {
    keyboardChoise(5);
  }
});
