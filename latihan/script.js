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
      document.body.style.backgroundColor = "transparent";
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
