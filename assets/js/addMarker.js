const markersContainer = document.querySelector(".markers");

document.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.shiftKey) {
    const rect = canvas.getBoundingClientRect();

    const randomColorRed = Math.floor(Math.random() * 255);
    const randomColorGreen = Math.floor(Math.random() * 255);
    const randomColorBlue = Math.floor(Math.random() * 255);

    const marker = document.createElement("div");
    const markerName = document.createElement("input");

    markerName.setAttribute("type", "text");
    markerName.setAttribute("value", "Метка");
    marker.classList.add("marker");
    marker.style.backgroundColor = `rgb(${randomColorRed}, ${randomColorGreen}, ${randomColorBlue})`;

    marker.appendChild(markerName);
    markersContainer.appendChild(marker);

    marker.style.left = e.clientX - rect.left - marker.clientWidth / 2 + "px";
    marker.style.top = e.clientY - rect.top - marker.clientHeight * 2 + "px";
  }
});
