// ---- Light/Dark mode transition ----

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

// ---- Hamburger menu pop-out ----

let hamburgerMenuButton = document.querySelector(".nav-menu-button");
let hamburgerMenuButtonCircle = document.querySelectorAll(".menu-circle");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburgerMenuButtonClose = document.querySelector(".menu-cross");
let hamburgerMenuItem = document.querySelectorAll(".hamburger-menu-li");

hamburgerMenuButton.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-menu-shift");
  hamburgerMenuButtonClose.classList.toggle("hidden");
});

// make menu button hidden
for (let i = 0; i < hamburgerMenuButtonCircle.length; i++) {
  hamburgerMenuButton.addEventListener("click", function () {
    hamburgerMenuButtonCircle[i].classList.toggle("hidden");
  });
}

// make cross button hidden & menu button appear
for (let i = 0; i < hamburgerMenuItem.length; i++) {
  hamburgerMenuItem[i].addEventListener("click", function () {
    hamburgerMenu.classList.toggle("hamburger-menu-shift");
    hamburgerMenuButtonClose.classList.toggle("hidden");

    hamburgerMenuButtonCircle[0].classList.toggle("hidden");
    hamburgerMenuButtonCircle[1].classList.toggle("hidden");
    hamburgerMenuButtonCircle[2].classList.toggle("hidden");
    hamburgerMenuButtonCircle[3].classList.toggle("hidden");
  });
}

// ---- Replace opening animation by adding ID with another animation ----

let headerImgAnimation = document.querySelector("#header-img-close");

setTimeout(() => {
  headerImgAnimation.id = "header-img";
}, 1500);

// ---- Scroll trigger events ----

// window.addEventListener("scroll", () => {
//   // scrollHieght = height of total html elements ; innerHieght = height of viewport
//   // ==> scrollable height would be document.documentElement.scrollHeight - window.innerHeight
//   const scrollable = document.documentElement.scrollHeight - window.innerHeight;
//   const scrolled = window.scrollY;

//   console.log(scrollable);
// });

const influencerImgPosition =
  document.querySelector(".influencers-img-container").getBoundingClientRect()
    .top + window.scrollY;
const startWordsPosition =
  document.querySelector(".start-words-container").getBoundingClientRect().top +
  window.scrollY;
const startImgPosition =
  document.querySelector(".start-img-container").getBoundingClientRect().top +
  window.scrollY;
const workoutWordsPosition =
  document.querySelector(".workout-words-container").getBoundingClientRect()
    .top + window.scrollY;
const workoutImgPosition =
  document.querySelector(".workout-img-container").getBoundingClientRect().top +
  window.scrollY;

// console.log(window.scrollY);

window.addEventListener("scroll", () => {
  const triggerOpacityTransform = function (e) {
    document.querySelector(e).style.opacity = "1";
    document.querySelector(e).style.transform = "translateY(0%)";
  };

  if (
    Math.ceil(window.scrollY) > influencerImgPosition * 0.55 &&
    window.innerWidth < 678
  ) {
    triggerOpacityTransform(".influencers-img-container");
  }

  if (
    Math.ceil(window.scrollY) > influencerImgPosition * 0.4 &&
    window.innerWidth >= 678
  ) {
    triggerOpacityTransform(".influencers-img-container");
  }

  if (Math.ceil(window.scrollY) > startImgPosition * 0.55) {
    triggerOpacityTransform(".start-img-container");
  }

  if (Math.ceil(window.scrollY) > startWordsPosition * 0.55) {
    triggerOpacityTransform(".start-words-container");
  }

  if (Math.ceil(window.scrollY) > workoutImgPosition * 0.7) {
    triggerOpacityTransform(".workout-img-container");
  }

  if (Math.ceil(window.scrollY) > workoutWordsPosition * 0.7) {
    triggerOpacityTransform(".workout-words-container");
  }
});
