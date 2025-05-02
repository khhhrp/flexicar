document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-target]");

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const targetBlock = this.getAttribute("data-target");
      document
        .querySelectorAll(".register__form, .register__verification")
        .forEach((block) => {
          block.style.display = "none";
        });
      const blockToShow = document.querySelector(`.${targetBlock}`);
      if (blockToShow) {
        blockToShow.style.display = "flex";
      }
    });
  });

  const codeInputs = document.querySelectorAll(".register__code-input");

  codeInputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");

      if (this.value.length === 1 && index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    });

    input.addEventListener("keydown", function (e) {
      if (e.key === "Backspace" && this.value === "" && index > 0) {
        codeInputs[index - 1].focus();
      }
    });
  });
});
