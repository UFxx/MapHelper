const buttons = document.querySelectorAll(".add-players-buttons button");

buttons.forEach((el, index) => {
  el.addEventListener("click", () => {
    for (i = 0; i < players.length; i++) {
      // Get button && player color from clicked element classlist
      const playerColor = `add-${
        el.classList[0].split("-")[1]
      }-player-button__active`;

      // index is button[i]
      if (index === i) {
        players[i].classList.toggle("player__visible");
        console.log(playerColor);
        buttons[index].classList.toggle(`${playerColor}`);
      }
    }
  });
});
