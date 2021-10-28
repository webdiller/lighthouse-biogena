const tabForm = document.querySelector(".js-tab-form");
const tabs = tabForm.querySelectorAll("[data-tab-id]");
const views = tabForm.querySelectorAll("[data-view-id]");
const bgImage = tabForm.querySelector("[data-tab-image]");
const forms = tabForm.querySelectorAll("form");
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

try {
  if (forms.length > 0) {
    forms.forEach((form) => {
      const requriredElements = form.querySelectorAll("[required]");
      const submitBtn = form.querySelector("button[type='button']");
      const errorsElement = form.querySelector('.tab-form__errors');

      submitBtn.addEventListener("click", function (e) {
        errorsElement.innerHTML = '';
        requriredElements.forEach((field) => {
          if (field.hasAttribute("required")) {
            if (!field.checkValidity()) {
              const errorHTML = `<small class="tab-form__error">${field.dataset.requirederrormessage}</small>`;
              errorsElement.insertAdjacentHTML("beforeend", errorHTML);
            }
          }
        });
      });
    });
  }
} catch (error) {}

/**
 * Нажимаем submit
 * Если в форме есть обязательные поля и если у они не прошли валидацию, то
 * Собираем все элементы полей, вытаскиваем аттрибуты и создаем html код в ошибке
 * Повторяем нажатие submit, проверяем, если ок, удаляем ошибки, если опять есть ошибки
 */
