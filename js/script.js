var link = document.querySelector(".button--form");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var fio = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-email]");
var form = popup.querySelector("form");
var overlay = document.querySelector(".feedback_popup_overlay");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-feedback__show");
  overlay.classList.add("overlay__show");
  if (storage) {
    fio.value = storage;
    email.value = storage;
  } else {
    fio.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-feedback__show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay__show");
});

form.addEventListener("submit", function (evt) {
  if (!fio.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("fio", fio.value);
    localStorage.setItem("email", email.value);
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-feedback__show")) {
      popup.classList.remove("modal-feedback__show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay__show");
    }
  }
});
