const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ingredients.forEach(function (ingredient) {
//   var item = document.createElement("li");
//   item.innerText = ingredient;
//   document.body.append(item);
// });
// console.log(ingredients);
// const ingredient = ingredients[0];
// const ulElem = document.querySelector("#ingredients");
// const liElem = document.createElement("li");
// console.log(ingredient);
// console.log(ulElem);
// console.log(liElem);
const ulElem = document.querySelector("#ingredients");
const elements = ingredients.map((ingredient) => {
  const liElem = document.createElement("li");
  liElem.classList.add("item");
  liElem.textContent = ingredient;
  return liElem;
});
console.log(elements);
ulElem.append(...elements);
