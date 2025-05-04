document.addEventListener("DOMContentLoaded", function () {
  const accountBtn = document.querySelector(".header__account-btn");
  const accountMenu = document.querySelector(".account-menu");

  function closeAccountMenu() {
    accountBtn.classList.remove("header__account-btn--active");
    accountMenu.classList.remove("account-menu--active");
  }

  accountBtn.addEventListener("click", function () {
    this.classList.toggle("header__account-btn--active");
    accountMenu.classList.toggle("account-menu--active");
  });

  window.addEventListener("resize", function () {
    closeAccountMenu();
  });
});
