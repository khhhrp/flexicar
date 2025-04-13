document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const menu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");

  function toggleClass(element, active) {
    element.classList.toggle(active);
  }

  function closeMenu() {
    menu.classList.remove("header__menu--open");
    burgerBtn.classList.remove("burger-btn--active");
    overlay.classList.remove("overlay--active");
  }

  burgerBtn.addEventListener("click", () => {
    toggleClass(burgerBtn, "burger-btn--active");
    toggleClass(menu, "header__menu--open");
    toggleClass(overlay, "overlay--active");
  });

  overlay.addEventListener("click", () => {
    closeMenu();
  });

  window.addEventListener("resize", () => {
    closeMenu();
  });
});
