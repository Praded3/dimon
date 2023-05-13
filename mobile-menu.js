const menuBody = document.querySelector(".mobile-menu");
const body = document.querySelector(".body");

document.addEventListener("click", menu);

function menu(event) {
  if (event.target.closest(".menu-btn")) {
    menuBody.classList.toggle("is-open");
    body.classList.toggle("lock");
  }

  if (event.target.closest(".mobile-menu")) {
    menuBody.classList.toggle("is-open");
    body.classList.toggle("lock");
  }
}
lastStep.btn.addEventListener('click', onLastStepBtnClick);