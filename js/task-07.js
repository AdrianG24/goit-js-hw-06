const newInput = document.getElementById("font-size-control");
const newSpan = document.getElementById("text");
newInput.addEventListener("input", inputRange);
function inputRange(event) {
  newSpan.style.fontSize = event.currentTarget.value + "px";
}
