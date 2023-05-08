const refs = {
    backdrop: document.querySelector('.backdrop'),
    modalForm: document.querySelector('.modal__form'),
    modalFormBtn: document.querySelector('.modal__btn'),
    modalCloseBtn: document.querySelector('.modal__close-btn'),
    body: document.querySelector('body'),
};

const openBtns = {
    heroBtn: document.querySelector('.hero__btn'),
    advantagesBtn: document.querySelector('.advantages__btn'),
    nationwideBtn: document.querySelector('.nationwide__btn'),
    questionBtn: document.querySelector('.question__btn'),
};
const steps = {
    modalFirst: document.querySelector('.modal__first-step'),
    modalCorrectZip: document.querySelector('.modal__correct-zip'),
    modalUpdateZip: document.querySelector('.modal__update-zip'),
    modalSecondStep: document.querySelector('.modal__second-step'),
    modalThirdStep: document.querySelector('.modal__third-step'),
    modalFourthStep: document.querySelector('.modal__fourth-step'),
    modalFifthStep: document.querySelector('.modal__fifth-step'),
    modalSixthStep: document.querySelector('.modal__sixth-step'),
    modalListing: document.querySelector('.modal__listing'),
    modalSevenStep: document.querySelector('.modal__seven-step'),
    modalContract: document.querySelector('.modal__contract'),
    modalEighthStep: document.querySelector('.modal__eighth-step'),
    modalAndStep: document.querySelector('.modal__and-step'),
    modalThanksPage: document.querySelector('.modal__thanks-page'),
    
} 
//=================== formData ============

refs.modalForm.addEventListener('submit', modalFormSubmit);

function modalFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    console.log(formData);
    
    formData.forEach((x, y) => {
        console.log(x);
        console.log(y);
        
    });
    // console.dir(event.currentTarget.elements.repairs.checked);
    
}
//====================/ formData /============

//==================== open & close modal ======================
const doModalClose = () => {
    refs.backdrop.classList.toggle('is-hiden');
    refs.body.classList.toggle('lock');
    openBtns.heroBtn.addEventListener('click', (visabilityBackdrop) );
    openBtns.advantagesBtn.addEventListener('click', (visabilityBackdrop) );
    openBtns.nationwideBtn.addEventListener('click', (visabilityBackdrop) );
    openBtns.questionBtn.addEventListener('click', (visabilityBackdrop));
    firstStep.input.removeEventListener('input', (onInutChange));
};

refs.modalCloseBtn.addEventListener('click', (doModalClose) )

const visabilityBackdrop = () => {
    refs.backdrop.classList.toggle('is-hiden');
    refs.body.classList.toggle('lock');
    openBtns.heroBtn.removeEventListener('click', (visabilityBackdrop) );
    openBtns.advantagesBtn.removeEventListener('click', (visabilityBackdrop) );
    openBtns.nationwideBtn.removeEventListener('click', (visabilityBackdrop) );
    openBtns.questionBtn.removeEventListener('click', (visabilityBackdrop) );
    firstStep.input.addEventListener('input', (onInutChange));
};

openBtns.heroBtn.addEventListener('click', (visabilityBackdrop) );
openBtns.advantagesBtn.addEventListener('click', (visabilityBackdrop) );
openBtns.nationwideBtn.addEventListener('click', (visabilityBackdrop) );
openBtns.questionBtn.addEventListener('click', (visabilityBackdrop) );

//==================== /open & close modal/ ======================

//=================== first step ==================

const firstStep = {
    btn: document.querySelector('.first-step__btn'),
    input: document.querySelector('.modal-zip'),
    zipCodeCheck: document.querySelector('.correct-zip-code'),
    correctZip: document.querySelectorAll('.correct-zip'),
};

 console.log(firstStep.correctZip);

// firstStep.correctZip.forEach(function(zip, id){
//     console.log(zip.id === 'zip-is-correct');
    
//  })








let zipCode;

function onInutChange(event) {
    zipCode = event.currentTarget.value;
    firstStep.btn.disabled = !zipCode;

    if (zipCode) {
        firstStep.btn.addEventListener('click', onfirstStepBtnClick);
    };

    console.log(zipCode);
};

function onfirstStepBtnClick(event) {
    steps.modalFirst.classList.toggle('is-not-displayed');
    steps.modalCorrectZip.classList.toggle('is-not-displayed');
    firstStep.btn.removeEventListener('click', onfirstStepBtnClick);
    firstStep.input.removeEventListener('input', onInutChange);
    firstStep.zipCodeCheck.textContent = zipCode;

}
let zip;

function onCorrectZipClick(event) {
    firstStep.correctZip.forEach(function (zip, id) {
        zip.addEventListener('click', (onCorrectZipChect));

        function onCorrectZipChect() {

            if (zip.id === 'zip-is-correct') {
                console.log('ура'); 
            }

            else {
                console.log('ffffff');
                
            }
            zip.removeEventListener('click', (onCorrectZipChect));
        };
     
    });
};

onCorrectZipClick(firstStep.correctZip);
//===================/ first step /==================

//=================== second step ==================
// const secondStep = {
   
// };


//===================/ second step /==================



const qqq = document.querySelectorAll('.is-not-displayed');

const www = function eee(array) {
    array.forEach(element => {
        element.classList.toggle('is-not-displayed');
    });
}
www(qqq);

