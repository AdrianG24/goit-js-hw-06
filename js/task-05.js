const oldName = document.querySelector("#name-input");

const newName = document.querySelector("#name-output");

oldName.oninput = function () {
  newName.innerHTML = oldName.value;
  if (newName.innerHTML === "") {
    newName.innerHTML = "Anonymous";
  }
};
console.log(oldName.value);
