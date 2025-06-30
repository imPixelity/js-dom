// DOM Traversal
const closeBtn = document.querySelectorAll(".close");

// Prevent Default || Event Bubbling
closeBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.parentElement.remove();
    e.preventDefault();
    // e.stopPropagation();
  });
});

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    alert("test");
  });
});

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  if (e.target.className === "close") {
    e.target.parentElement.remove();
    e.preventDefault();
    alert("testt");
  }
});

const uName = document.querySelector(".name");

// parentNode -> node
console.log(uName.parentNode);

// parentElement -> element
console.log(uName.parentElement);

// nextSibling -> node
console.log(uName.nextSibling);

// nextElementSibling -> element
console.log(uName.nextElementSibling);

// previousSibling -> node
console.log(uName.previousSibling);

// previousElementSibling -> element
console.log(uName.previousElementSibling);
