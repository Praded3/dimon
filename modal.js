const refs = {
    backdrop: document.querySelector('.backdrop'),
    modalForm: document.querySelector('.modal__form'),
    modalFormBtn: document.querySelector('.modal__btn'),
};

const openBtns = {
    heroBtn: document.querySelector('.hero__btn'),
    advantagesBtn: document.querySelector('.advantages__btn'),
    nationwideBtn: document.querySelector('.nationwide__btn'),
    questionBtn: document.querySelector('.question__btn'),
};
openBtns.heroBtn.addEventListener('click', () => {
    refs.backdrop.classList.toggle('is-hiden')
});
openBtns.advantagesBtn.addEventListener('click', () => {
    refs.backdrop.classList.toggle('is-hiden')
});
openBtns.nationwideBtn.addEventListener('click', () => {
    refs.backdrop.classList.toggle('is-hiden')
});
openBtns.questionBtn.addEventListener('click', () => {
    refs.backdrop.classList.toggle('is-hiden')
});


openBtns.heroBtn.addEventListener('click', onOpenBtnsClick);



