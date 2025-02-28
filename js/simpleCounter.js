// console.log("test....");

// const count = document.getElementById("counter");
// const parentCount = document.getElementById("main-div");

// console.log(count.innerText);

// function increaseCount() {
//   let currentCount = Number(count.innerText);
//   currentCount++;

//   count.innerText = currentCount;
// }
// function decreaseCount() {
//   let currentCount = Number(count.innerText);
//   currentCount--;

//   count.innerText = currentCount;
// }

// const increaseButton = document.getElementsByClassName("increase-button")[0];
// const decreaseButton = document.getElementsByClassName("decrease-button")[0];

// parentCount.addEventListener("click", function () {
//   console.log("Main Count");
//   increaseButton.setAttribute("disabled", true);
//   decreaseButton.setAttribute("disabled", true);
// });

// increaseButton.addEventListener("click", function (event) {
//   //   console.log("Counter...");
//   let currentCount = Number(count.innerText);
//   currentCount++;
//   count.innerText = currentCount;
//   event.stopPropagation();
// });

// decreaseButton.addEventListener("click", function (event) {
//   //   console.log("Counter...");
//   let currentCount = Number(count.innerText);
//   currentCount--;
//   count.innerText = currentCount;
//   event.stopPropagation();
// });

// const digits = document.getElementById("current-digits");
// const mainCounter = document.getElementById("counter-main");

// function increaseCount() {
//   let count = Number(digits.innerText);

//   count++;
//   digits.innerText = count;
// }

// function decreaseCount() {
//   let count = Number(digits.innerText);

//   count--;
//   digits.innerText = count;
// }

// const increaseButton = document.getElementsByClassName("increase-button")[0];
// const decreaseButton = document.getElementsByClassName("decrease-button")[0];

// mainCounter.addEventListener("click", function () {
// console.log('');

//   if (increaseButton.getAttribute("disabled") === null) {
//     increaseButton.setAttribute("disabled", true);
//     decreaseButton.setAttribute("disabled", true);
//     mainCounter.classList.add("bg-sky-300");
//   } else {
//     increaseButton.removeAttribute("disabled");
//     decreaseButton.removeAttribute("disabled");
//     mainCounter.classList.remove("bg-sky-300");
//   }
// });

// increaseButton.addEventListener("click", function (event) {
//   let currentDigits = Number(digits.innerText);
//   currentDigits++;
//   digits.innerText = currentDigits;
//   event.stopPropagation();
// });

// decreaseButton.addEventListener("click", function (event) {
//   let currentDigits = Number(digits.innerText);
//   currentDigits--;
//   digits.innerText = currentDigits;
//   event.stopPropagation();
// });

const digits = document.getElementById("digits");
const counterBody = document.getElementById("counter-main");

const increaseButton = document.getElementsByClassName("increase-button")[0];
const decreaseButton = document.getElementsByClassName("decrease-button")[0];

counterBody.addEventListener("click", function () {
  increaseButton.setAttribute("disabled", true);
});

increaseButton.addEventListener("click", function () {
  let count = Number(digits.innerText);
  count++;
  digits.innerText = count;
});

decreaseButton.addEventListener("click", function () {
  let count = Number(digits.innerText);
  count--;
  digits.innerText = count;
});
