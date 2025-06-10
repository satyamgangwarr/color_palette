const generateBtn = document.getElementById("generate-btn");
const colorPalette = document.querySelector(".palette");

generateBtn.addEventListener("click", generatePalette);

function generatePalette() {
  const colors = generateRandomColors(5);
  const colorBoxes = document.querySelectorAll(".color-box");

  colorBoxes.forEach((box, index) => {
    const color = colors[index];
    const colorText = box.querySelector(".color-hex");
    const colorCode = box.querySelector(".color");

    colorCode.style.backgroundColor = color;
    colorText.textContent = color;
  });
}

function generateRandomColors(num) {
  const colors = [];
  for (let i = 0; i < num; i++) {
    let color = `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
    colors.push(color);
  }
  return colors;
}
colorPalette.addEventListener("click", handlePaletteClick);

function handlePaletteClick(event) {
  const copyImg = event.target.closest(".copy-img");
  if (copyImg) {
    const colorNameDiv = copyImg.closest(".color-name");
    const hexCodeSpan = colorNameDiv.querySelector(".color-hex");
    const hexCode = hexCodeSpan.textContent;

    navigator.clipboard.writeText(hexCode).then(() => {
        const originalSrc = "./src/copy-link.png";
        copyImg.src = "./src/check-mark.png";
        setTimeout(() => {
          copyImg.src = originalSrc;
        }, 1000);
      }).catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
}
