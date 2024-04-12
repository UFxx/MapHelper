const openSettingsIcon = document.querySelector("#open-settings-icon");
const modalWindow = document.querySelector(".settings-modal");
const closeSettingsIcon = document.querySelector("#close-settings-icon");

openSettingsIcon.addEventListener("click", () => {
  modalWindow.classList.remove("settings-modal__hidden");
});

closeSettingsIcon.addEventListener("click", () => {
  modalWindow.classList.add("settings-modal__hidden");
});
