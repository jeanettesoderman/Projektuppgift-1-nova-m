"use strict";

/* Hämtar knappen för hamburgermenyn */
const menuToggle = document.querySelector(".menu-toggle");

/* Hämtar listan med navigationslänkar */
const navLinks = document.querySelector(".nav-links");

/* Lägger till en eventlyssnare som körs när man klickar på hamburgermenyn */
menuToggle.addEventListener("click", function () {

  /* Växlar klassen open på menyn */
  navLinks.classList.toggle("open");
});