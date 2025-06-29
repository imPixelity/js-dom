const elementBtn = document.querySelectorAll(".player-pick ul li");
const compPickImg = document.querySelector(".wrapper img");
const resultBox = document.querySelector(".result-box");
const result = document.querySelector(".result-box p");
const resultBoxComp = resultBox.getElementsByTagName("p")[1];

const elementList = [
  { element: "fire", winAgainst: "grass", icon: "\u{1F525}" },
  { element: "water", winAgainst: "fire", icon: "\u{1F4A7}" },
  { element: "grass", winAgainst: "water", icon: "\u{1F343}" },
];

function playGame(playerElement) {
  const compElement =
    elementList[Math.floor(Math.random() * elementList.length)];
  if (playerElement.element === compElement.element) {
    result.innerHTML = "Draw!\u{1F91D}";
  } else if (playerElement.winAgainst === compElement.element) {
    result.innerHTML = "You won!\u{1F3C6}";
  } else {
    result.innerHTML = "Ain't no way you lose vro\u{1F940}";
  }

  resultBoxComp.innerHTML = `Computer picked: ${
    compElement.element[0].toUpperCase() + compElement.element.slice(1)
  }${compElement.icon}`;
  compPickImg.setAttribute("src", `img/${compElement.element}.svg`);
  compPickImg.style.width = "28px";
  resultBoxComp.classList.add("visible");
}

elementBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => playGame(elementList[i]));
});
