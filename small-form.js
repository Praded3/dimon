const refs = {
    backdrop: document.querySelector('.steps__form-backdrop'),
    modalForm: document.querySelector('.steps__form'),
    modalInput: document.querySelectorAll('.steps__input'),
    modalFormBtn: document.querySelector('.steps__btn'),
    modalCloseBtn: document.querySelector('.steps__form-close-btn'),
    body: document.querySelector('body'),
    clientName: document.querySelector('.modal__thanks-name'),
    
}

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


// function onModalFormBtnClick(event) {
//     refs.backdrop.classList.toggle('is-hiden');
//     refs.body.classList.toggle('lock');
// }

// refs.modalFormBtn.addEventListener('click', (onModalFormBtnClick));

onModalInputChange();

function onModalInputChange() {
    refs.modalForm.addEventListener('submit', modalFormSubmit);

    refs.modalInput.forEach(function (input) {
        input.addEventListener('input', (userDataCheck));
        
    });
};

function userDataCheck(event) {
        
    if (refs.modalInput[0].value &&
        refs.modalInput[1].value &&
        refs.modalInput[2].value &&
        refs.modalInput[3].value) {
         console.log(refs.modalInput[0].value);
        
            refs.modalFormBtn.disabled = !event.currentTarget.value;   
            refs.modalFormBtn.addEventListener('click', (onModalFormBtnClick));
    };
    
};

function onModalFormBtnClick(event) {
    console.log('qqqq');
    refs.backdrop.classList.toggle('is-hiden');
    refs.modalInput.forEach(function (input) {
        input.removeEventListener('input', (userDataCheck));
        
    });
    refs.modalFormBtn.removeEventListener('click', (onModalFormBtnClick));
    refs.modalCloseBtn.addEventListener('click', (onModalCloseBtnClick));

    refs.clientName.textContent = `Dear ${refs.modalInput[0].value},`;

}

function onModalCloseBtnClick(event) {

    refs.backdrop.classList.toggle('is-hiden');
    refs.modalCloseBtn.removeEventListener('click', (onModalCloseBtnClick));
    refs.modalForm.removeEventListener('submit', modalFormSubmit);

}