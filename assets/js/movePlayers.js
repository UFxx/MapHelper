const players = document.querySelectorAll(".player-figure");
let activePlayer = null;

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

// Move players
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  activePlayer.style.left =
    e.clientX - rect.left - activePlayer.clientWidth / 2 + "px";
  activePlayer.style.top =
    e.clientY - rect.top - activePlayer.clientHeight / 2 + "px";
});

// Delete "player__active" on RMB click
window.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  players.forEach((el) => {
    el.classList.remove("player__active");
  });
  activePlayer = null;
});
