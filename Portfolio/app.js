"use strict";
let hamburger = document.querySelector(".menu-icon");
let cloze_icon = document.querySelector(".close-icon");
let header = document.querySelector('header');
let nav = document.querySelector("nav");
hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.add("open-menu");
});
header.addEventListener('click', (e) => {
    nav.classList.remove('open-menu');
});
window.addEventListener('click', (e) => {
    nav.classList.remove('open-menu');
});
nav.addEventListener('click', (e) => {
    e.stopPropagation();
});
cloze_icon.addEventListener("click", () => {
    nav.classList.remove("open-menu");
});
