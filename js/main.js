// Light/Dark mode transition

let main = document.querySelector("main");
let modeTransition = document.querySelector(".nav-mode-button");

modeTransition.addEventListener("click", function () {
  main.classList.toggle("dark-theme");

  if (main.classList.contains("dark-theme")) {
    modeTransition.src = "./assets/sun.png";
  } else {
    modeTransition.src = "./assets/moon.png";
  }
});

// Hamburger menu pop-out

let hamburgerMenuButton = document.querySelector(".nav-menu-button");
let hamburgerMenuButtonCircle = document.querySelectorAll(".menu-circle");
console.log(hamburgerMenuButtonCircle);
let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburgerMenuButtonClose = document.querySelector(".menu-cross");

hamburgerMenuButton.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-menu-shift");
  hamburgerMenuButtonClose.classList.toggle("hidden");
});

for (let i = 0; i < hamburgerMenuButtonCircle.length; i++) {
  hamburgerMenuButton.addEventListener("click", function () {
    hamburgerMenuButtonCircle[i].classList.toggle("hidden");
  });
}

// replace opening animation by adding ID with another animation

let headerImgAnimation = document.querySelector("#header-img-close");

setTimeout(() => {
  headerImgAnimation.id = "header-img";
}, 2000);
