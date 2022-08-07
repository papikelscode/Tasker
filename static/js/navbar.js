const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const containe = document.querySelector(".contain")

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
  containe.classList.toggle("active");
});