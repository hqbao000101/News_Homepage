const menu = document.querySelector("#menu-icon");
const nav_menu = document.querySelector("#nav-menu");
const menu_close = document.querySelector("#menu-close");
const shade = document.querySelector("#shade-background");
const body = document.querySelector("body");

menu.addEventListener("click", () => {
  nav_menu.style.display = "block";
  nav_menu.style.position = "fixed";
  nav_menu.style.top = "0";

  shade.style.display = "block";

  body.style.overflow = "hidden";
});

menu_close.addEventListener("click", () => {
  nav_menu.style.display = "none";
  shade.style.display = "none";
  body.style.overflow = "visible";
});

shade.onclick = () => {
  nav_menu.style.display = "none";
  shade.style.display = "none";
  body.style.overflow = "visible";
}