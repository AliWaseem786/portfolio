let hamburger = document.querySelector(".menu-icon") as HTMLElement;
let cloze_icon = document.querySelector(".close-icon") as HTMLElement;
let header = document.querySelector("header") as HTMLElement;
let nav = document.querySelector("nav") as HTMLElement;

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.add("open-menu");
});

header.addEventListener("click", (e) => {
  nav.classList.remove("open-menu");
});

window.addEventListener("click", (e) => {
  nav.classList.remove("open-menu");
});

nav.addEventListener("click", (e) => {
  e.stopPropagation();
});

cloze_icon.addEventListener("click", () => {
  nav.classList.remove("open-menu");
});
