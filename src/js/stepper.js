document.addEventListener("DOMContentLoaded", function () {
  const stepBtn = document.querySelector(".rental-form__btn");
  const steps = document.querySelectorAll(".step");
  const progressBlock = document.querySelector(".rental-steps");
  const progressItems = document.querySelectorAll(".progress__item");
  const rentalCard = document.querySelector(".rental-card");
  const rentalStepsCard = document.querySelector(".rental-steps__card");
  const rentalForm = document.querySelector(".rental-form");
  let counter = 0;

  if (!stepBtn || !rentalForm) {
    return;
  }

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("hide", i !== index);
    });
  }

  function updateProgress(index) {
    progressItems.forEach((item, i) => {
      item.classList.toggle("progress__item--active", i === index);
    });
  }

  function resetAll() {
    counter = 0;
    stepBtn.innerText = "Proceed to Booking";
    showStep(null);
    updateProgress(0);
    rentalCard.classList.remove("hide");
    rentalStepsCard.classList.remove("hide");
    progressBlock.classList.add("hide");
    stepBtn.classList.remove("hide");
  }

  function step() {
    if (counter === 0) {
      rentalCard.classList.add("hide");
      progressBlock.classList.remove("hide");
      showStep(0);
      updateProgress(0);
      stepBtn.innerText = "Continue";
    } else if (counter < steps.length) {
      showStep(counter);
      updateProgress(counter);
      stepBtn.innerText =
        counter === steps.length - 1 ? "Complete" : "Continue";
      rentalStepsCard.classList.remove("hide");
    }

    if (counter === steps.length - 1) {
      stepBtn.classList.add("hide");
      rentalStepsCard.classList.add("hide");
    }

    counter++;
  }

  stepBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Button clicked, counter:", counter);
    if (counter < steps.length) {
      step();
    }
  });

  rentalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted, counter:", counter);
    window.location.href = "payment-success.html";
  });
});
