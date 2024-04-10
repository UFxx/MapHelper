const div = document.querySelector(".movable-div");

// Get cursor postion
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  div.style.left = e.clientX - rect.left - div.clientWidth / 2 + "px";
  div.style.top = e.clientY - rect.top - div.clientHeight / 2 + "px";
});
