const categoryItems = document.querySelectorAll("#categories > .item");

categoryItems.forEach((item) => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});
