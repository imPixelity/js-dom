const buttonZone = document.getElementsByClassName("button-zone")[0];
const buttonList = ["red", "green", "blue"];

// Creating button with parameter for color button and click event for changing body color
function createButton(color) {
  const button = document.createElement("button");
  let textButton = document.createTextNode(color);
  button.style.backgroundColor = color;
  button.setAttribute("type", "button");
  button.append(textButton);

  button.addEventListener("click", function () {
    const currentBg = document.body.style.backgroundColor;
    const clickedColor = button.style.backgroundColor;
    if (currentBg === clickedColor) {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = color;
    }
  });
  buttonZone.append(button);
}

// Execute creating button function equal to array
for (let i = 0; i < buttonList.length; i++) {
  createButton(buttonList[i]);
}

// Generating random hex code for random button
const randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", function () {
  randNum = [];
  for (let i = 0; i < 3; i++) {
    randNum[i] = Math.floor(Math.random() * 256);
  }
  document.body.style.backgroundColor = `rgb(${randNum[0]}, ${randNum[1]}, ${randNum[2]})`;
});

// Reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
});

// HTMLCollection and NodeList cant do addEventListener, so need to loop them each individually
const slider = document.querySelectorAll(".slider-zone input[type='range']");
for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("input", function () {
    const r = slider[0].value;
    const g = slider[1].value;
    const b = slider[2].value;
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

// document.body.addEventListener("mouseover", function (e) {
//   const xPos = Math.floor((e.clientX / window.innerWidth) * 256);
//   const yPos = Math.floor((e.clientY / window.innerHeight) * 256);
//   document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 0)`;
// });
