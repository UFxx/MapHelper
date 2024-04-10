const starterMenu = document.querySelector(".starter-menu");
const playersCountInput = document.querySelector("#starter-menu-input-range");
const playersCountLabel = document.querySelector(
  "#starter-menu-input-range + label span"
);

window.addEventListener("load", () => {
  playersCountLabel.textContent = playersCountInput.value;
});

playersCountInput.addEventListener("change", () => {
  playersCountLabel.textContent = playersCountInput.value;
});
