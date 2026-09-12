const list = document.querySelector(".namelist");
function addName() {
  const newName = document.createElement("li");
  newName.textContent = "newname";
  list.appendChild(newName);
}

function removeName() {
  const lastName = list.lastElementChild;
  if (lastName) {
    list.removeChild(lastName);
  }
}
