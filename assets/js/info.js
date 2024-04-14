const openInfoIcon = document.querySelector("#open-info-icon");
const closeInfoIcon = document.querySelector("#close-info-icon");
const infoBg = document.querySelector(".info-modal-bg");
const infoModal = document.querySelector(".info-modal");

openInfoIcon.addEventListener("click", () => {
  infoBg.classList.remove("info-modal-bg__hidden");
  setTimeout(() => {
    infoModal.style.transform = "translateY(0)";
    infoModal.style.opacity = 100;
  }, 300);
});

const closeInfo = () => {
  infoModal.style.transform = "translateY(50px)";
  infoModal.style.opacity = 0;
  setTimeout(() => {
    infoBg.classList.add("info-modal-bg__hidden");
  }, 300);
};

closeInfoIcon.addEventListener("click", () => {
  closeInfo();
});