document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const menu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");

  const menuClose = document.querySelectorAll("[data-menu-close]");
  const menuToggle = document.querySelectorAll("[data-menu-toggle]");

  function toggleClass(element, active) {
    element.classList.toggle(active);
  }

  menuClose.forEach((el) => el.addEventListener("click", closeMenu));
  menuToggle.forEach((el) => el.addEventListener("click", toggleMenu));

  function closeMenu() {
    menu.classList.remove("header__menu--open");
    burgerBtn.classList.remove("burger-btn--active");
    overlay.classList.remove("overlay--active");
  }

  function toggleMenu() {
    toggleClass(burgerBtn, "burger-btn--active");
    toggleClass(menu, "header__menu--open");
    toggleClass(overlay, "overlay--active");
  }

  window.addEventListener("resize", () => {
    closeMenu();
  });
});
