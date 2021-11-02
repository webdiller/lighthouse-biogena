const tabForm = document.querySelector(".js-tab-form");
const tabs = tabForm.querySelectorAll("[data-tab-id]");
const views = tabForm.querySelectorAll("[data-view-id]");
const bgImage = tabForm.querySelector("[data-tab-image]");
const forms = tabForm.querySelectorAll("form");
const customCheckboxes = tabForm.querySelectorAll(
  "[data-type='custom-checkbox']"
);
let inputTel = document.querySelector("#phone");

try {
  if (customCheckboxes.length > 0) {
    customCheckboxes.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.target.classList.toggle("active");
        if (e.target.classList.contains("active")) {
          e.target.parentElement.parentElement
            .querySelector('button[type="submit"')
            .parentElement.parentElement.querySelector('button[type="submit"')
            .removeAttribute("disabled");
        } else {
          e.target.parentElement.parentElement
            .querySelector('button[type="submit"')
            .parentElement.parentElement.querySelector('button[type="submit"')
            .setAttribute("disabled", true);
        }
      });
    });
  }
} catch (error) {}

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
  window.intlTelInput(inputTel, {
    customContainer: "tab-form__input-wrapper",
    preferredCountries: ["ru", "by", "kz"],
  });
} catch (error) {}

try {
  var maskOptions = { mask: '+{*}(000)000-00-00'};
  var mask = IMask(inputTel, maskOptions);
} catch (error) {
  
}

try {
  if (forms.length > 0) {
    forms.forEach((form) => {
      const requriredElements = form.querySelectorAll("[required]");
      const submitBtn = form.querySelector("button[type='submit']");
      const errorsElement = form.querySelector(".tab-form__errors");

      form.addEventListener("input", function (e) {
        errorsElement.innerHTML = "";
        requriredElements.forEach((field) => {
          if (
            field.hasAttribute("required") &&
            field.hasAttribute("data-requiredErrorMessage") &&
            !field.checkValidity()
          ) {
            const errorHTML = `<small class="tab-form__error">${field.dataset.requirederrormessage}</small>`;
            errorsElement.insertAdjacentHTML("beforeend", errorHTML);
          }
        });
      });

      submitBtn.addEventListener("click", function (e) {
        requriredElements.forEach((field) => {
          if (
            field.hasAttribute("required") &&
            !field.hasAttribute("data-intl-tel-input-id") &&
            field.hasAttribute("data-checkValidationMessage") &&
            !field.checkValidity()
          ) {
            field.setCustomValidity(
              field.getAttribute("data-checkValidationMessage")
            );
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
