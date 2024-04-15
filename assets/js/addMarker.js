const markersContainer = document.querySelector(".markers");

document.addEventListener("click", function (e) {
  if (e.shiftKey) {
    const rect = canvas.getBoundingClientRect();

    const randomMarkerBackgroungColor = `rgb(${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )})`;

    const marker = document.createElement("div");
    const markerName = document.createElement("input");

    markerName.setAttribute("type", "text");
    markerName.setAttribute("value", "Метка");
    marker.classList.add("marker");
    marker.style.backgroundColor = randomMarkerBackgroungColor;

    marker.appendChild(markerName);
    markersContainer.appendChild(marker);

    marker.style.left = e.clientX - rect.left - marker.clientWidth / 2 + "px";
    marker.style.top = e.clientY - rect.top - marker.clientHeight * 2 + "px";

    // MARKERS SETTINGS (modal window)
    const markerSettingsModal = document.querySelector(
      ".marker-settings-modal-window"
    );

    // RMB on marker
    marker.addEventListener("contextmenu", (e) => {
      const markers = document.querySelectorAll(".marker");
      markers.forEach((el) => {
        el.classList.remove("marker__active");
      });
      marker.classList.add("marker__active");

      const rect = canvas.getBoundingClientRect();

      markerSettingsModal.classList.remove(
        "marker-settings-modal-window__hidden"
      );
      markerSettingsModal.style.left = e.clientX - rect.left + 20 + "px";
      markerSettingsModal.style.top = e.clientY - rect.top + "px";
    });

    const markerDeleteButton = document.querySelector(
      ".marker-modal-window-delete-button"
    );

    // Delete marker button (marker settings)
    markerDeleteButton.addEventListener("click", () => {
      const activeMarker = document.querySelector(".marker__active");
      activeMarker.style.transform = "scale(0.001)";
      markerSettingsModal.classList.add("marker-settings-modal-window__hidden");

      setTimeout(() => {
        activeMarker.style.display = "none";
      }, 300);
    });

    const markerRenameButton = document.querySelector(
      ".marker-modal-window-rename-button"
    );

    markerRenameButton.addEventListener("click", () => {
      const activeMarker = document.querySelector(".marker__active");
      // activeMarker.chilren[0] is input in .marker
      markerSettingsModal.classList.add("marker-settings-modal-window__hidden");
      activeMarker.children[0].focus();

      // blur input on press "Enter" and unactivate marker
      activeMarker.children[0].addEventListener("keypress", (e) => {
        if (e.key == "Enter") {
          activeMarker.children[0].blur();
          activeMarker.classList.remove("marker__active");
        }
      });
    });

    const markerCancelButton = document.querySelector(
      ".marker-modal-window-cancel-button"
    );
    markerCancelButton.addEventListener("click", () => {
      const activeMarker = document.querySelector(".marker__active");
      activeMarker.classList.remove("marker__active");
      markerSettingsModal.classList.add("marker-settings-modal-window__hidden");
    });
  }
});
