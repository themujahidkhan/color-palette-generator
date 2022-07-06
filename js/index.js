const palette1 = document.querySelector(".palette1");
const palette2 = document.querySelector(".palette2");
const palette3 = document.querySelector(".palette3");
const palette4 = document.querySelector(".palette4");
const palette5 = document.querySelector(".palette5");
const palette1Code = document.querySelector(".palette1Code");
const palette2Code = document.querySelector(".palette2Code");
const palette3Code = document.querySelector(".palette3Code");
const palette4Code = document.querySelector(".palette4Code");
const palette5Code = document.querySelector(".palette5Code");

window.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
  if (e.keyCode === 32) {
    generatePallete();
  }
});

function generatePallete() {
  const newColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const newColor2 = Math.floor(Math.random() * 16777215).toString(16);
  const newColor3 = Math.floor(Math.random() * 16777215).toString(16);
  const newColor4 = Math.floor(Math.random() * 16777215).toString(16);
  const newColor5 = Math.floor(Math.random() * 16777215).toString(16);

  // Palette 1
  palette1.style.backgroundColor = `#${newColor1}`;
  palette1Code.innerHTML = `#${newColor1}`;

  // Palette 2
  palette2.style.backgroundColor = `#${newColor2}`;
  palette2Code.innerHTML = `#${newColor2}`;

  // Palette 3
  palette3.style.backgroundColor = `#${newColor3}`;
  palette3Code.innerHTML = `#${newColor3}`;
  //palette 4
  palette4.style.backgroundColor = `#${newColor4}`;
  palette4Code.innerHTML = `#${newColor4}`;
  // Palette 5
  palette5.style.backgroundColor = `#${newColor5}`;
  palette5Code.innerHTML = `#${newColor5}`;
}

generatePallete();
