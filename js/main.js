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
