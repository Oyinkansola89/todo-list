// Add a "checked" symbol when clicking on a list item
function addCheckedClass(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}

export default addCheckedClass;
