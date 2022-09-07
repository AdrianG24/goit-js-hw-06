const categoryEl = document.querySelector("#categories").children.length;
console.log("Number of categories:", categoryEl);

const ul = Array.from(document.querySelector("#categories").children);
for (let element of ul) {
  let category = element.firstElementChild.textContent;
  let quantityElement = element.lastElementChild.children.length;
  console.log(`Category: ${category} \nElements: ${quantityElement}`);
}
