import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", () => {
  const heartIcons = document.querySelectorAll(".icon.bi-heart");

  heartIcons.forEach((heart) => {
    heart.addEventListener("mouseenter", () => {
      heart.classList.remove("bi-heart");
      heart.classList.add("bi-heart-fill");
    });

    heart.addEventListener("mouseleave", () => {
      heart.classList.remove("bi-heart-fill");
      heart.classList.add("bi-heart");
    });
  });
});
