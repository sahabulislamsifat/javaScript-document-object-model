const ulTag = document.getElementById("nav-container");
const listItems = ulTag.getElementsByTagName("li");

let lastClicked = null; // Use let instead of const

for (let singleListItem of listItems) {
  singleListItem.addEventListener("click", function () {
    if (lastClicked === null) {
      singleListItem.style.background = "red";
      singleListItem.style.color = "white";
      lastClicked = singleListItem;
    } else {
      lastClicked.style.background = "transparent";
      lastClicked.style.color = "black";

      singleListItem.style.background = "red";
      singleListItem.style.color = "white";
      lastClicked = singleListItem;
    }
  });
}
