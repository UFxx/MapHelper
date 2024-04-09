const input = document.querySelector("#upload-map-input");
const canvas = document.querySelector("canvas");
const el = document.querySelector('canvas div')
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

// Get cursor postion
canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    console.log(`X: ${e.clientX - rect.left} Y: ${e.clientY - rect.top}`)
})