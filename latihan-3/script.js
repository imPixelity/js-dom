const imageList = document.querySelectorAll(".images-container img");
imageList.forEach((image, i) => {
  image.addEventListener("click", (e) => {
    e.target.parentElement.previousElementSibling.setAttribute(
      "src",
      `img/image-${i + 1}.jpg`
    );
  });
});
