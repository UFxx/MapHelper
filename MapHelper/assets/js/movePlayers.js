const players = document.querySelectorAll(".player-figure");
let activePlayer = "";

// Add "player__active" to clicked element
players.forEach((el) => {
  el.addEventListener("click", () => {
    el.classList.add("player__active");
    activePlayer = el;
    // Delete "player__active" from unclicked blocks
    for (i = 0; i < players.length; i++) {
      if (el !== players[i]) {
        players[i].classList.remove("player__active");
      }
    }
  });
});

// Get cursor postion
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  activePlayer.style.left =
    e.clientX - rect.left - activePlayer.clientWidth / 2 + "px";
  activePlayer.style.top =
    e.clientY - rect.top - activePlayer.clientHeight / 2 + "px";
});
