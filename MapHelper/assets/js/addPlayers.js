const buttons = document.querySelectorAll(".add-players-buttons button");

buttons.forEach((el, index) => {
  el.addEventListener("click", () => {
    for (i = 0; i < players.length; i++) {
      // index is button[i]
      if (index === i) {
        players[i].classList.toggle("player__visible");
      }
    }
  });
});
