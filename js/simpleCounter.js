// console.log("test....");

const count = document.getElementById("counter");
const parentCount = document.getElementById("main-div");

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

const increaseButton = document.getElementsByClassName("increase-button")[0];
const decreaseButton = document.getElementsByClassName("decrease-button")[0];

parentCount.addEventListener("click", function () {
  console.log("Main Count");
  increaseButton.setAttribute("disabled", true);
  decreaseButton.setAttribute("disabled", true);
});

increaseButton.addEventListener("click", function (event) {
  //   console.log("Counter...");
  let currentCount = Number(count.innerText);
  currentCount++;
  count.innerText = currentCount;
  event.stopPropagation();
});

decreaseButton.addEventListener("click", function (event) {
  //   console.log("Counter...");
  let currentCount = Number(count.innerText);
  currentCount--;
  count.innerText = currentCount;
  event.stopPropagation();
});
