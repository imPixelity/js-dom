// DOM Traversal
const closeBtn = document.querySelectorAll(".close");

closeBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
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
