const fireBtn = document.getElementById("fire-btn");
const waterBtn = document.getElementById("water-btn");
const grassBtn = document.getElementById("grass-btn");
const elementList = ["fire", "water", "grass"];

function randomCompPick() {
  const compAnswer = elementList[Math.floor(Math.random() * 3)];
}
