
const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("nav-menu");
const navOverlay = document.getElementById("nav-overlay");

hamburger.addEventListener("click", e => {
  if(navMenu.classList.contains("active")) {
    navOverlay.classList.remove("active");
    navMenu.classList.remove("active");
  } else {
    navOverlay.classList.add("active");
    navMenu.classList.add("active");
  }
});

navOverlay.addEventListener("click", e => {
  if(navMenu.classList.contains("active")) {
    navOverlay.classList.remove("active");
    navMenu.classList.remove("active");
  } else {
    navOverlay.classList.add("active");
    navMenu.classList.add("active");
  }
})