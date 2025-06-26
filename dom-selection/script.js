// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.backgroundColor = "blue";
judul.innerHTML = "Test";

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "orange";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.color = "purple";

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Test";

// document.querySelector() -> element
const p4 = document.querySelector("#b p");
p4.style.color = "green";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "red";

// document.querySelectorAll() -> nodeList
const pAll = document.querySelectorAll("p");
for (let i = 0; i < pAll.length; i++) {
  pAll[i].innerHTML = "Diubah melalui JS";
}

// -----------------------------------------
const sectionB = document.getElementById("b");
const pg4 = sectionB.querySelector("p");
pg4.style.color = "pink";
