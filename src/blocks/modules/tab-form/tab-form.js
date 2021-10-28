const tabForm = document.querySelector(".js-tab-form");
const tabs = tabForm.querySelectorAll("[data-tab-id]");
const views = tabForm.querySelectorAll("[data-view-id]");
const bgImage = tabForm.querySelector("[data-tab-image]");
let inputTel = document.querySelector("#phone");

try {
  if (tabs.length > 0 && views.length > 0) {
    tabs.forEach((tab) => {
      tab.addEventListener("click", function (e) {
        tabs.forEach((el) => el.classList.remove("active"));
        views.forEach((el) => el.classList.remove("active"));
        const tabId = Number(e.target.dataset.tabId) - 1;
        e.target.classList.add("active");
        views[tabId].classList.add("active");
      });
    });
  }
} catch (error) {}

try {
  inputTel.addEventListener("keypress", function (e) {
    if ((e.which !== 43 && e.which < 48) || e.which > 57) {
      e.preventDefault();
    }
  });

  window.intlTelInput(inputTel, {
    customContainer: "tab-form__input-wrapper",
  });
} catch (error) {}
