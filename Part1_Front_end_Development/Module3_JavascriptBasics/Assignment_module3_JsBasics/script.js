// getting needed DOM nodes:
const mainWrapper = document.getElementById("main-wrapper");
const mainBtn = document.getElementById("main-btn");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const itemsWrapper = document.getElementById("items-wrapper");
let allListItems = document.querySelectorAll(".items");
let chosenBgColorText = document.querySelector("#chosen-bg-color-text");

// --------------------- Function Expression declarations ------------------
const activeMenu = function () {
  itemsWrapper.style.display = "flex";
  //   menu.classList.remove("inactive-menu");
  //   menu.classList.add("active-menu");
  menu.classList.toggle("inactive-menu");
  menu.classList.toggle("active-menu");
  menu.style.width = "15%";
  menu.style.display = "grid";
};
const inActiveMenu = function () {
  itemsWrapper.style.display = "flex";
  menu.classList.toggle("inactive-menu");
  menu.classList.toggle("active-menu");
  //   menu.classList.add("inactive-menu");
  //   menu.classList.remove("active-menu");
  //   menu.style.width = "15%";
  //   menu.style.display = "none";
};
const toggleMenu = function () {
  menu.classList.toggle("inactive-menu");
  menu.classList.toggle("active-menu");
  itemsWrapper.style.display = "flex";
  menu.style.width = "15%";
};
//--------------------------------------------------------------------------
mainBtn.addEventListener("mouseenter", activeMenu);
mainBtn.addEventListener("click", toggleMenu);
menu.addEventListener("mouseleave", inActiveMenu);

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

// -------------------------------------------------------------------------
//loop through each li to set bg color as well as bg color name on each li:
const myColorsArr = ["green", "yellow", "purple", "tomato", "lightblue"];

allListItems.forEach((item, i) => {
  item.style.backgroundColor = myColorsArr[i];
  item.textContent =
    myColorsArr[i].charAt(0).toUpperCase() + myColorsArr[i].slice(1);
  item.addEventListener("click", () => {
    mainWrapper.style.backgroundColor = getBgColor(item);
    chosenBgColorText.textContent = item.textContent;
    inActiveMenu();
  });
  i++;
});
