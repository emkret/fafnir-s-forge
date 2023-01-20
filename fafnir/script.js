const hamburger = document.querySelector(" .toggle");
const mobile_menu = document.querySelector(".menu");
const menu_item = document.querySelectorAll(".menu__item");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});
menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 500,
  delay: 400,
});

ScrollReveal().reveal(".contact__p--p", {
  delay: 00,
  origin: "top",
});
ScrollReveal().reveal(".p-container", {
  delay: 400,
  origin: "bottom",
});
ScrollReveal().reveal(".pic__container--description", {
  delay: 400,
  origin: "right",
});
ScrollReveal().reveal(".con-pic__h2, .knive__p", {
  delay: 400,
  origin: "bottom",
});
ScrollReveal().reveal(".con-pic,.con-pic1", {
  delay: 400,
  origin: "bottom",
  duration: 1000,
});
ScrollReveal().reveal(".slide", {
  delay: 400,
  origin: "left",
  interval: 300,
});
