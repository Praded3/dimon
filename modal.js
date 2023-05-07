const refs = {
    backdrop: document.querySelector('.backdrop'),
    modalForm: document.querySelector('.modal__form'),
    modalFormBtn: document.querySelector('.modal__btn'),
    modalCloseBtn: document.querySelector('.modal__close-btn'),
};

const openBtns = {
    heroBtn: document.querySelector('.hero__btn'),
    advantagesBtn: document.querySelector('.advantages__btn'),
    nationwideBtn: document.querySelector('.nationwide__btn'),
    questionBtn: document.querySelector('.question__btn'),
};
// openBtns.heroBtn.addEventListener('click', () => {
//     refs.backdrop.classList.toggle('is-hiden')
// });
// openBtns.advantagesBtn.addEventListener('click', () => {
//     refs.backdrop.classList.toggle('is-hiden')
// });
// openBtns.nationwideBtn.addEventListener('click', () => {
//     refs.backdrop.classList.toggle('is-hiden')
// });
// openBtns.questionBtn.addEventListener('click', () => {
//     refs.backdrop.classList.toggle('is-hiden')
// });

//==================== open & close modal ======================
const doModalClose = () => {
    refs.backdrop.classList.toggle('is-hiden');
    openBtns.heroBtn.addEventListener('click', (visabilityBackdrop) );
    openBtns.advantagesBtn.addEventListener('click', (visabilityBackdrop) );
    openBtns.nationwideBtn.addEventListener('click', (visabilityBackdrop) );
    openBtns.questionBtn.addEventListener('click', (visabilityBackdrop) );
};

refs.modalCloseBtn.addEventListener('click', (doModalClose) )

const visabilityBackdrop = () => {
    refs.backdrop.classList.toggle('is-hiden');
    openBtns.heroBtn.removeEventListener('click', (visabilityBackdrop) );
    openBtns.advantagesBtn.removeEventListener('click', (visabilityBackdrop) );
    openBtns.nationwideBtn.removeEventListener('click', (visabilityBackdrop) );
    openBtns.questionBtn.removeEventListener('click', (visabilityBackdrop) );

};

openBtns.heroBtn.addEventListener('click', (visabilityBackdrop) );
openBtns.advantagesBtn.addEventListener('click', (visabilityBackdrop) );
openBtns.nationwideBtn.addEventListener('click', (visabilityBackdrop) );
openBtns.questionBtn.addEventListener('click', (visabilityBackdrop) );

//==================== /open & close modal/ ======================

const firstStepBtn = document.querySelector('.first-step__btn');
const modaZip = document.querySelector('.modal-zip');
 console.log(modaZip.value);


const confirmFirstStep = () => {
    
}







const qqq = document.querySelectorAll('.is-not-displayed');

const www = function eee(array) {
    array.forEach(element => {
        element.classList.toggle('is-not-displayed');
    });
}
www(qqq);

