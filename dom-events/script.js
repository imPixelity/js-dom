// DOM Events
// Event Handler on<events>
const p3 = document.getElementsByClassName("p3")[0];
function changeBgP2() {
  p2.style.backgroundColor = "green";
}

function changeBgP3() {
  p3.style.backgroundColor = "green";
}
const p2 = document.querySelector(".p2");
p2.onclick = changeBgP2;

// addEventListener()
const p4 = document.querySelector("#b p");
const ul = document.querySelector("#b ul");
let counter = 4;
p4.addEventListener("click", function () {
  const newLi = document.createElement("li");
  let textNewLi = document.createTextNode(`Item ${counter}`);
  counter++;
  newLi.appendChild(textNewLi);
  ul.appendChild(newLi);
});

// Perbedaan
const p1 = document.querySelector(".p1");
p1.onclick = function () {
  p1.style.backgroundColor = "blue";
};
p1.onclick = function () {
  p1.style.color = "red";
};

const item1 = document.querySelector("#b ul li");
item1.addEventListener("click", function () {
  item1.style.backgroundColor = "blue";
});
item1.addEventListener("click", function () {
  item1.style.color = "red";
});
