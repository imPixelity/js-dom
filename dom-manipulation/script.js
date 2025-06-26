// DOM Manipulation
// element.innerHTML
const judul = document.getElementById("judul");
judul.innerHTML = "<b>Hello WORLD";

const sectionA = document.getElementsByTagName("section")[0];
sectionA.innerHTML = "Hello";

// element.style.<properties>
const h2 = document.querySelector("h2");
h2.style.color = "green";

// element.setAttribute() | element.getAttribute() | element.removeAttribute()
const h3 = document.getElementsByTagName("h3")[0];
h3.setAttribute("label", "h3");

const a = document.querySelector("#b a");
a.setAttribute("href", "https://www.youtube.com/");
console.log(a.getAttribute("href"));
a.removeAttribute("href");

// element.classList
const p5 = document.querySelector("#b p:nth-child(2)");
p5.classList.add("paragraf");
p5.classList.remove("paragraf");
p5.classList.toggle("check");
console.log(p5.classList.item(0));
console.log(p5.classList.contains("check"));
p5.classList.replace("check", "active");
console.log(p5.classList);
