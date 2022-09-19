function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.getElementById("change-color");
console.log(btn);

btn.addEventListener("click", function onClick(event) {
  document.body.style.backgroundColor = getRandomHexColor();
});
