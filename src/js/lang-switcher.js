document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.querySelector(".header__lang-btn");
  const langSelector = document.querySelector(".language-selector");
  const langInputs = document.querySelectorAll(".language-selector__input");

  function getLangCode(lang) {
    const langCodes = {
      ukrainian: "UA",
      english: "EN",
      croatian: "HR",
    };
    return langCodes[lang] || "EN";
  }

  function closeLanguageSelector() {
    langBtn.classList.remove("header__lang-btn--active");
    langSelector.classList.remove("language-selector--active");
  }

  langBtn.addEventListener("click", function () {
    this.classList.toggle("header__lang-btn--active");
    langSelector.classList.toggle("language-selector--active");
  });

  langInputs.forEach((input) => {
    input.addEventListener("change", function () {
      if (this.checked) {
        const langText = getLangCode(this.value);
        langBtn.firstChild.textContent = langText;
        closeLanguageSelector();
      }
    });

    if (input.checked) {
      langBtn.firstChild.textContent = getLangCode(input.value);
    }
  });

  window.addEventListener("resize", function () {
    closeLanguageSelector();
  });
});
