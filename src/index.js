import addCheckedClass from "./modules/AddCheckedClass.js";
// Create a "close" button and append it to each list item
// Click on a close button to hide the current list item

const list = document.querySelector("ul");
list.addEventListener("click", (event) => addCheckedClass(event));

// Create a new list item when clicking on the "Add" button
//didn't make the newElement function a new module it would look like the below..
window.createNewList = function createNewList() {
  const list = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  let text = document.createTextNode(inputValue);
  list.appendChild(text);

  if (inputValue === " ") {
    alert("please type into the search bar what you need to get done");
  } else {
    document.getElementById("myUL").appendChild(list);
  }
  document.querySelector("input").value = "";
};
