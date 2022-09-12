const oldName = document.querySelector("#name-input");

const newName = document.querySelector("#name-output");

oldName.oninput = function () {
  newName.innerHTML = oldName.value;
};
console.log(oldName.value);
