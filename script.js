const nameEl = document.getElementById("name-input");
const dateEl = document.getElementById("date-input");
const submitBtn = document.getElementById("submit-btn");
const bodyTextEl = document.getElementById("container");
const headline = document.getElementById("headline");
const formEL = document.getElementById("cta-form");
let currentYear = new Date().getFullYear;
const disBtn = document.getElementById("disappear-btn");
const mainEl = document.getElementById("main");
const formText = document.getElementById("form-text");
let obj = {};
let userName = "";
let birthDate = Date;

function testFunct(e) {
  e.preventDefault();
  userName = e.srcElement[0].value;
  birthDate = e.srcElement[1].value;
  alert(
    `So sorry ${userName}, trips from ${currentYear} to ${birthDate} are not currently available, please come back later`
  );
}

// formEL.addEventListener("submit", testFunct);

// function disappear() {
//   mainEl.style.visibility = "hidden";
// }

// disBtn.addEventListener("click", disappear);
formEL.addEventListener("submit", testFunct);
