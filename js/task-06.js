// const newInput = document.querySelector("#validation-input");
// console.log(newInput);
// newInput.addEventListener(
//   "blur",
//   function (event) {
//     event.target.style.background = "black";
//   },
//   true
// );
const newInput = document.querySelector("#validation-input");
let textLength = 0;

newInput.addEventListener("input", (event) => {
  textLength = event.currentTarget.value.length;
});
const validNumber = Number(newInput.dataset.length);

newInput.addEventListener("blur", (event) => {
  if (textLength === validNumber) {
    newInput.classList.remove("invalid");
    newInput.classList.add("valid");
  } else if (textLength === 0) {
    newInput.classList.remove("invalid");
    newInput.classList.remove("valid");
  } else {
    newInput.classList.remove("valid");
    newInput.classList.add("invalid");
  }
});
