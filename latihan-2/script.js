const elementBtn = document.querySelectorAll(".player-pick ul li");
const compPickImg = document.querySelector(".wrapper img");
const result = document.querySelector(".result-box p");
const resultBox = document.querySelector(".result-box");
const resultBoxComp = resultBox.getElementsByTagName("p")[1];
const playerScore = document.querySelector(".player-score span");
const compScore = document.querySelector(".comp-score span");

// Score counter
let pScore = 0;
let cScore = 0;

// Element definition
const elementList = [
  { element: "fire", winAgainst: "grass", icon: "\u{1F525}" },
  { element: "water", winAgainst: "fire", icon: "\u{1F4A7}" },
  { element: "grass", winAgainst: "water", icon: "\u{1F343}" },
];

// Roll animation
function roll() {
  const imageList = elementList.map(function (item) {
    return item.element;
  });

  let i = 0;
  const rollInterval = setInterval(() => {
    compPickImg.setAttribute("src", `img/${imageList[i]}.svg`);
    i = (i + 1) % 3;
  }, 100);

  setTimeout(() => {
    clearInterval(rollInterval);
  }, 1000);
}

// Main game logic
function playGame(playerElement) {
  const compElement =
    elementList[Math.floor(Math.random() * elementList.length)];

  roll();

  setTimeout(() => {
    // Determine result
    if (playerElement.element === compElement.element) {
      result.textContent = "Draw!\u{1F91D}";
    } else if (playerElement.winAgainst === compElement.element) {
      result.textContent = "You won!\u{1F3C6}";
      pScore++;
      playerScore.textContent = pScore;
    } else {
      result.textContent = "Ain't no way you lose vro\u{1F940}";
      cScore++;
      compScore.textContent = cScore;
    }

    // Update computer pick visually
    resultBoxComp.textContent = `Computer picked: ${
      compElement.element[0].toUpperCase() + compElement.element.slice(1)
    }${compElement.icon}`;
    compPickImg.setAttribute("src", `img/${compElement.element}.svg`);
    resultBoxComp.classList.add("visible");
  }, 1000); // Wait for roll animation
}

// Spam prevention
let isClickable = true;

// Button click events
elementBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    if (!isClickable) return;
    isClickable = false;

    playGame(elementList[i]);

    // Reset clickability after 1 second
    setTimeout(() => {
      isClickable = true;
    }, 1000);
  });
});
