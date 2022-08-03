const toggle = document.querySelector("#toggle");
const priceBoxes = document.querySelectorAll(".price-box");

toggle.addEventListener("change", () => {
  console.log("change");
  priceBoxes.forEach((box) => box.classList.toggle("show-monthly"));
});
