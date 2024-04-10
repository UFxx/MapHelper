const input = document.querySelector("#upload-map-input");
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const img = new Image();

// Add background img on canvas
input.addEventListener("change", () => {
  const fileReader = new FileReader();
  fileReader.onload = function () {
    img.onload = function () {
      context.drawImage(img, 0, 0, 1536, 640);
    };
    img.src = fileReader.result;
  };
  fileReader.readAsDataURL(input.files[0]);
});
