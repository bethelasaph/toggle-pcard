"use strict";

const icon1 = document.querySelector(".icon-1");
const icon2 = document.querySelector(".icon-2");
const container = document.querySelector(".container");

const modes = function () {
  container.classList.toggle("light-mode");

  icon1.classList.toggle("hidden");
  icon2.classList.toggle("hidden");
};

icon1.addEventListener("click", modes);
icon2.addEventListener("click", modes);
