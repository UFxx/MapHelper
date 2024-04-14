const clearMap = document.querySelector(".settings-button-clear-map");
const clearPlayers = document.querySelector(".settings-button-clear-players");
const clearMarkers = document.querySelector(".settings-button-clear-markers");

clearMap.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
});

clearPlayers.addEventListener("click", () => {
  // Hide players, unactive players, position to zero
  players.forEach((el) => {
    el.classList.remove("player__visible");
    el.classList.remove("player__active");
    el.style.top = 0;
    el.style.left = 0;
    activePlayer = null;
  });

  // Delete add-{color}-player-button__active class
  buttons.forEach((el) => {
    el.classList.remove(el.classList[1]);
  });
});

clearMarkers.addEventListener("click", () => {
  markersContainer.innerHTML = null;
});
