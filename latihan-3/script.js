// Solution 1
// const imageList = document.querySelectorAll(".images-container img");
// imageList.forEach((image, i) => {
//   image.addEventListener("click", (e) => {
//     e.target.parentElement.previousElementSibling.setAttribute(
//       "src",
//       `img/image-${i + 1}.jpg`
//     );
//   });
// });

// Solution 2
// const container = document.querySelector(".container");
// const highlight = document.querySelector(".highlight");

// container.addEventListener("click", (e) => {
//   if (e.target.className === "imageBox") {
//     highlight.setAttribute("src", getImage(e.target));
//   }
// });

// const getImage = (image) => {
//   return image.getAttribute("src");
// };

// Solution 3
const container = document.querySelector(".container");
const highlight = document.querySelector(".highlight");
const imageList = document.querySelectorAll(".imageBox");
let isClickable = true;

container.addEventListener("click", (e) => {
  if (e.target.className === "imageBox") {
    if (!isClickable) return;
    isClickable = false;

    highlight.src = e.target.src;
    highlight.classList.add("fade");

    imageList.forEach((image) => {
      if (image.classList.contains("active")) {
        image.classList.remove("active");
      }
    });

    setTimeout(() => {
      highlight.classList.remove("fade");
      isClickable = true;
    }, 500);

    e.target.classList.add("active");
  }
});
