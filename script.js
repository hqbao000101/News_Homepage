const menu = document.querySelector("#menu-icon");
const nav_menu = document.querySelector("#nav-menu");
const menu_close = document.querySelector("#menu-close");
const shade = document.querySelector("#shade-background");

menu.addEventListener("click", () => {
  nav_menu.style.display = "block";
  shade.style.display = "block";
});

menu_close.addEventListener("click", () => {
  nav_menu.style.display = "none";
  shade.style.display = "none";
});