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
    refs.modalForm.addEventListener('submit', modalFormSubmit);

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


//==================== eighth-step ======================

const eighthStep = {
    timeList: document.querySelector('.time-list'),
    buttonPrev: document.querySelector('.eighth-previous-step__btn'), 
}

function onEighthSepButtonPrevClick(event) {
    console.log('prev8');
    sevenModalStep.checkBoxYes.addEventListener('click', (onSevenModalStepCheckBoxYesClick));
    sevenModalStep.checkBoxNo.addEventListener('click', (onSevenModalStepCheckBoxNOClick));
    sevenModalStep.buttonPrev.addEventListener('click', (onSevenModalStepButtonPrevClick));
    steps.modalSevenStep.classList.toggle('is-not-displayed');
    steps.modalEighthStep.classList.toggle('is-not-displayed');


    eighthStep.buttonPrev.removeEventListener('click', (onEighthSepButtonPrevClick));

}

function onTimeItemClick(event) {

    if (event.target.nodeName == 'INPUT') {

        steps.modalEighthStep.classList.toggle('is-not-displayed');
        steps.modalAndStep.classList.toggle('is-not-displayed');
        eighthStep.buttonPrev.removeEventListener('click', (onEighthSepButtonPrevClick));
        onLastStepInputChange(lastStep.input);

        eighthStep.timeList.removeEventListener('click', (onTimeItemClick));

    }
};




//====================/ eighth-step /======================

//==================== contract lose date ======================

const loseDate = {
    input: document.querySelector('.contract-expired-date'),
    buttonNext: document.querySelector('.contract-expired-step__btn'), 
    buttonPrev: document.querySelector('.contract-expired-previous-step__btn'), 
}

function onLoseDateButtonNextClick(event) {
    console.log('next lose');
    loseDate.input.removeEventListener('input', (onLoseDateInutChange));
    loseDate.buttonPrev.removeEventListener('click', (onLoseDateButtonPrevClick));
    steps.modalContract.classList.toggle('is-not-displayed');
    steps.modalAndStep.classList.toggle('is-not-displayed');
    onLastStepInputChange(lastStep.input);
    
    
    
    loseDate.buttonNext.removeEventListener('click', onLoseDateButtonNextClick);


}

function onLoseDateButtonPrevClick(event) {
    console.log(' back lose');
    loseDate.buttonNext.removeEventListener('click', onLoseDateButtonNextClick);
    loseDate.input.removeEventListener('input', (onLoseDateInutChange));
    steps.modalSevenStep.classList.toggle('is-not-displayed');
    steps.modalContract.classList.toggle('is-not-displayed');
    sevenModalStep.checkBoxYes.addEventListener('click', (onSevenModalStepCheckBoxYesClick));
    sevenModalStep.checkBoxNo.addEventListener('click', (onSevenModalStepCheckBoxNOClick));
    sevenModalStep.buttonPrev.addEventListener('click', (onSevenModalStepButtonPrevClick));

    
    
    loseDate.buttonPrev.removeEventListener('click', (onLoseDateButtonPrevClick));

}


let losDate;
    
function onLoseDateInutChange(event) {
    losDate = event.currentTarget.value;
    loseDate.buttonNext.disabled = !losDate;
    
    if (losDate) {

        loseDate.buttonNext.addEventListener('click', onLoseDateButtonNextClick);
    };

};

//==================== /contract lose date/ ======================


//====================  expiredDate  ======================

const expiredDate = {
    input: document.querySelector('.listing-expired-date'),
    buttonNext: document.querySelector('.listing-expired-step__btn'), 
    buttonPrev: document.querySelector('.listing-expired-previous-step__btn'), 
}


function onExpiredDateButtonNextClick(event) {
    console.log('asdfd');
    expiredDate.input.removeEventListener('input', (onExpiredDateInutChange));
    expiredDate.buttonPrev.removeEventListener('click', (onExpiredDateButtonPrevClick));
    steps.modalListing.classList.toggle('is-not-displayed');
    steps.modalAndStep.classList.toggle('is-not-displayed');
    onLastStepInputChange(lastStep.input);
    expiredDate.buttonNext.removeEventListener('click', (onExpiredDateButtonNextClick));

}

function onExpiredDateButtonPrevClick(event) {
    console.log('XXXXXXXXX');
    expiredDate.input.removeEventListener('input', (onExpiredDateInutChange));
    steps.modalListing.classList.toggle('is-not-displayed');
    steps.modalSixthStep.classList.toggle('is-not-displayed');
    sixthModalStep.checkBoxYes.addEventListener('click', (onSixthModalStepCheckBoxYesClick));
    sixthModalStep.buttonPrev.addEventListener('click', (onSixthModalStepButtonPrevClick));
    sixthModalStep.checkBoxNo.addEventListener('click', (onSixthModalStepCheckBoxNoClick));
    expiredDate.buttonNext.removeEventListener('click', (onExpiredDateButtonNextClick));
    expiredDate.buttonPrev.removeEventListener('click', (onExpiredDateButtonPrevClick));

}


let expDate;

function onExpiredDateInutChange(event) {
    expDate = event.currentTarget.value;
    expiredDate.buttonNext.disabled = !expDate;
     console.log(expDate);
    
    if (expDate) {
        expiredDate.buttonNext.addEventListener('click', onExpiredDateButtonNextClick);
    };

    console.log(zipCode);
};

//==================== /expiredDate/ ======================

//==================== wholesaler =======================

const sevenModalStep = {
    checkBoxYes: document.querySelector('.with-wholesaler'),
    checkBoxNo: document.querySelector('.no-wholesaler'), 
    buttonPrev: document.querySelector('.seven-revious-step__btn'), 

}



function onSevenModalStepCheckBoxYesClick(event) {
    console.log('yes wholesaler');
    sevenModalStep.buttonPrev.removeEventListener('click', (onSevenModalStepButtonPrevClick));
    sixthModalStep.checkBoxNo.addEventListener('click', (onSixthModalStepCheckBoxNoClick));
    steps.modalSevenStep.classList.toggle('is-not-displayed');
    steps.modalContract.classList.toggle('is-not-displayed');
    loseDate.input.addEventListener('input', (onLoseDateInutChange));
    loseDate.buttonPrev.addEventListener('click', (onLoseDateButtonPrevClick));

    
    
    
    sevenModalStep.checkBoxYes.removeEventListener('click', (onSevenModalStepCheckBoxYesClick));

}

function onSevenModalStepCheckBoxNOClick(event) {
    console.log('no wholesaler');
    sevenModalStep.buttonPrev.removeEventListener('click', (onSevenModalStepButtonPrevClick));
    sevenModalStep.checkBoxYes.removeEventListener('click', (onSevenModalStepCheckBoxYesClick));
    steps.modalSevenStep.classList.toggle('is-not-displayed');
    steps.modalEighthStep.classList.toggle('is-not-displayed');
    //suda
    eighthStep.buttonPrev.addEventListener('click', (onEighthSepButtonPrevClick));
    eighthStep.timeList.addEventListener('click', (onTimeItemClick));

    
    
    sevenModalStep.checkBoxNo.removeEventListener('click', (onSevenModalStepCheckBoxNOClick));

   

}
function onSevenModalStepButtonPrevClick(event) {
    console.log('prev wholesaler');
    sevenModalStep.checkBoxYes.removeEventListener('click', (onSevenModalStepCheckBoxYesClick));
    sevenModalStep.checkBoxNo.removeEventListener('click', (onSevenModalStepCheckBoxNOClick));
    steps.modalSixthStep.classList.toggle('is-not-displayed');
    steps.modalSevenStep.classList.toggle('is-not-displayed');
    sixthModalStep.checkBoxYes.addEventListener('click', (onSixthModalStepCheckBoxYesClick));
    sixthModalStep.checkBoxNo.addEventListener('click', (onSixthModalStepCheckBoxNoClick));
    sixthModalStep.buttonPrev.addEventListener('click', (onSixthModalStepButtonPrevClick));
    
    
    sevenModalStep.buttonPrev.removeEventListener('click', (onSevenModalStepButtonPrevClick));
   

}



//====================/ wholesaler /======================


//==================== estate agent ======================

const sixthModalStep = {
    checkBoxYes: document.querySelector('.with-agent'),
    checkBoxNo: document.querySelector('.no-agent'), 
    buttonPrev: document.querySelector('.sixth-previous-step__btn'), 

}

function onSixthModalStepCheckBoxYesClick(event) {
    console.log('yes agent');

    steps.modalSixthStep.classList.toggle('is-not-displayed');
    steps.modalListing.classList.toggle('is-not-displayed');
    sixthModalStep.checkBoxNo.removeEventListener('click', (onSixthModalStepCheckBoxNoClick));
    sixthModalStep.buttonPrev.removeEventListener('click', (onSixthModalStepButtonPrevClick));
    expiredDate.input.addEventListener('input', onExpiredDateInutChange);
    expiredDate.buttonPrev.addEventListener('click', (onExpiredDateButtonPrevClick));
    

    sixthModalStep.checkBoxYes.removeEventListener('click', (onSixthModalStepCheckBoxYesClick));

}

function onSixthModalStepCheckBoxNoClick(event) {
    console.log('no agent');
    
    steps.modalSixthStep.classList.toggle('is-not-displayed');
    steps.modalSevenStep.classList.toggle('is-not-displayed');
    sixthModalStep.checkBoxYes.removeEventListener('click', (onSixthModalStepCheckBoxYesClick));
    sixthModalStep.buttonPrev.removeEventListener('click', (onSixthModalStepButtonPrevClick));
    sevenModalStep.checkBoxYes.addEventListener('click', (onSevenModalStepCheckBoxYesClick));
    sevenModalStep.checkBoxNo.addEventListener('click', (onSevenModalStepCheckBoxNOClick));
    sevenModalStep.buttonPrev.addEventListener('click', (onSevenModalStepButtonPrevClick));


    sixthModalStep.checkBoxNo.removeEventListener('click', (onSixthModalStepCheckBoxNoClick));

}
function onSixthModalStepButtonPrevClick(params) {
    steps.modalSixthStep.classList.toggle('is-not-displayed');
    steps.modalFifthStep.classList.toggle('is-not-displayed');
    fifthModalStep.buttonNext.addEventListener('click', (onFifthModalStepButtonNextClick));
    sixthModalStep.checkBoxNo.removeEventListener('click', (onSixthModalStepCheckBoxNoClick));
    sixthModalStep.checkBoxYes.removeEventListener('click', (onSixthModalStepCheckBoxYesClick));
<<<<<<< HEAD
=======
    
    
    
>>>>>>> 9b89d8e33d4c395e15ba4fa6c448724c6c01a3a6
    sixthModalStep.buttonPrev.removeEventListener('click', (onSixthModalStepButtonPrevClick));


}


//==================== /estate agent/ ======================

//==================== repairs ======================

const fifthModalStep = {
    checkBox: document.querySelector('.repairs'),
    buttonNext: document.querySelector('.fifth-step__btn'), 
    buttonPrev: document.querySelector('.previous-fifth-step__btn'), 

}
function onFifthModalStepButtonNextClick(event) {
        
    console.log('er');

    
    steps.modalFifthStep.classList.toggle('is-not-displayed');
    steps.modalSixthStep.classList.toggle('is-not-displayed');
    fifthModalStep.checkBox.removeEventListener('click', (onRepairsItemClick));
    sixthModalStep.checkBoxYes.addEventListener('click', (onSixthModalStepCheckBoxYesClick));
    sixthModalStep.checkBoxNo.addEventListener('click', (onSixthModalStepCheckBoxNoClick));
    sixthModalStep.buttonPrev.addEventListener('click', (onSixthModalStepButtonPrevClick));
    fifthModalStep.buttonNext.removeEventListener('click', (onFifthModalStepButtonNextClick));




}
    
function onFifthModalStepButtonPrevClick(event) {
        
    console.log('er');
    steps.modalFourthStep.classList.toggle('is-not-displayed');
    steps.modalFifthStep.classList.toggle('is-not-displayed');
    fourthModalStep.buttonPrev.addEventListener('click', (onfourthModalStepButtonPrevClick));
    fourthModalStep.buttonNext.addEventListener('click', (onFourthModalStepButtonNextClick));
    fifthModalStep.buttonPrev.removeEventListener('click', (onFifthModalStepButtonPrevClick)) ;


    }

    function onRepairsItemClick(event) {

    const checkedReasons = event.target.nodeName == 'INPUT';
    fifthModalStep.buttonNext.disabled = !checkedReasons;

    if (checkedReasons) {
        fifthModalStep.buttonNext.addEventListener('click', (onFifthModalStepButtonNextClick));
    }
}


//====================/ repairs /======================

//==================== reasons ======================

const fourthModalStep = {
    checkBox: document.querySelector('.reasons'),
    buttonNext: document.querySelector('.fourth-step__btn'), 
    buttonPrev: document.querySelector('.previous-fourth-step__btn'), 

}

 console.log(fourthModalStep.checkBox);


function onFourthModalStepButtonNextClick(event) {
    steps.modalFifthStep.classList.toggle('is-not-displayed');
    steps.modalFourthStep.classList.toggle('is-not-displayed');
    fourthModalStep.checkBox.removeEventListener('click', (onReasonsItemClick)) ;
    fifthModalStep.checkBox.addEventListener('click', (onRepairsItemClick))
    fifthModalStep.buttonPrev.addEventListener('click', (onFifthModalStepButtonPrevClick)) ;
    fourthModalStep.buttonNext.removeEventListener('click', (onFourthModalStepButtonNextClick));
}


function onfourthModalStepButtonPrevClick(event) {
        
    console.log('er');
    
    steps.modalThirdStep.classList.toggle('is-not-displayed');
    steps.modalFourthStep.classList.toggle('is-not-displayed');
    modalThirdStep.livingList.addEventListener('click', (onLivingItemClick));
    fourthModalStep.buttonPrev.removeEventListener('click', (onfourthModalStepButtonPrevClick)) ;
    }


    function onReasonsItemClick(event) {

    const checkedReasons = event.target.nodeName == 'INPUT';
    fourthModalStep.buttonNext.disabled = !checkedReasons;

    if (checkedReasons) {
        fourthModalStep.buttonNext.addEventListener('click', (onFourthModalStepButtonNextClick));
    }
}

//==================== /reasons/ ======================

//==================== owner ======================

const modalThirdStep = {
    radios: document.querySelectorAll('.living-radio'),
    livingList: document.querySelector('.is-living'),
};
console.log(modalThirdStep.livingList);

function onLivingItemClick(event) {

    if (event.target.nodeName == 'INPUT') {

        steps.modalThirdStep.classList.toggle('is-not-displayed');
        steps.modalFourthStep.classList.toggle('is-not-displayed');
        fourthModalStep.checkBox.addEventListener('click', (onReasonsItemClick));
        fourthModalStep.buttonPrev.addEventListener('click', (onfourthModalStepButtonPrevClick)) ;
        modalThirdStep.livingList.removeEventListener('click', onLivingItemClick);
    }
};

//==================== /owner/ ======================

//==================== agent & wholesaler ======================

const lastStep = {
    input: document.querySelectorAll('.last-step-input'),
    btn: document.querySelector('.submit-btn'),
    clientName: document.querySelector('.thanks-page-name'),
    closeBtn: document.querySelector('.modal__form-close-btn'),
}



function onLastStepInputChange() {
    lastStep.input.forEach(function (input) {
        input.addEventListener('input', (userDataCheck));
        
    });
};

function userDataCheck(event) {
        
    if (lastStep.input[0].value &&
        lastStep.input[1].value &&
        lastStep.input[2].value) {
        
            lastStep.btn.disabled = !event.currentTarget.value;   
            lastStep.btn.addEventListener('click', onLastStepBtnClick);
    };
    
};

function onLastStepCloseBtnClick(event) {
    refs.backdrop.classList.toggle('is-hiden');
    refs.body.classList.toggle('lock');
    lastStep.closeBtn.removeEventListener('click', (onLastStepCloseBtnClick));

}

function onLastStepBtnClick(event) {
    console.log('qqqq');
    steps.modalAndStep.classList.toggle('is-not-displayed');
    steps.modalThanksPage.classList.toggle('is-not-displayed');
    
    lastStep.input.forEach(function (input) {
        input.removeEventListener('input', (userDataCheck));
        
    });
    lastStep.clientName.textContent = `Dear ${lastStep.input[0].value},`;
    lastStep.closeBtn.addEventListener('click', (onLastStepCloseBtnClick));
    lastStep.btn.removeEventListener('click', (onLastStepBtnClick));

    // firstStep.zipCodeCheck.textContent = zipCode;


}


//==================== /agent & wholesaler/ ======================


//=================== second step ==================

const secondStep = {
    ownerCheckBoxes: document.querySelectorAll('.owner-check-boxes'),
    ownerList: document.querySelector('.is-owner'),
    
}



function onOwnerChecking(event) {
    secondStep.ownerCheckBoxes.forEach(function (checkBox, id) {
        checkBox.addEventListener('click', (onOwnerCheckBoxesClick));

        function onOwnerCheckBoxesClick() {

            if (checkBox.id === 'is-owner') {
                steps.modalSecondStep.classList.toggle('is-not-displayed');
                steps.modalThirdStep.classList.toggle('is-not-displayed');
                modalThirdStep.livingList.addEventListener('click', (onLivingItemClick));
            }

            else {
                steps.modalSecondStep.classList.toggle('is-not-displayed');
                steps.modalAndStep.classList.toggle('is-not-displayed');
                onLastStepInputChange(lastStep.input);
            }
                // checkBox.removeEventListener('click', (onOwnerCheckBoxesClick));

        };

    });
};



//===================/ second step /==================

//=================== first step ==================

const firstStep = {
    btn: document.querySelector('.first-step__btn'),
    input: document.querySelector('.modal-zip'),
    zipCodeCheck: document.querySelector('.correct-zip-code'),
    correctZip: document.querySelectorAll('.correct-zip'),
};


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
    onCorrectZipClick(firstStep.correctZip);

}
let zip;
//===================/ first step /==================

//=================== update-zip ==================

const updateZip = {
    input: document.querySelectorAll('.modal__update-zip-input'),
    btn: document.querySelector('.update__btn'),
};

function onUpdateZipInputChange() {
    updateZip.input.forEach(function (input) {
        input.addEventListener('input', (updateZipCheck));
        
    });
};


function updateZipCheck(event) {
        
    if (updateZip.input[0].value &&
        updateZip.input[1].value &&
        updateZip.input[2].value &&
        updateZip.input[3].value) {
        
            updateZip.btn.disabled = !event.currentTarget.value;   
            updateZip.btn.addEventListener('click', onUpdateZipBtnClick);
    };
     console.log(  updateZip.input[1].value);
    
};


function onUpdateZipBtnClick(event) {

    updateZip.btn.removeEventListener('click', (onUpdateZipBtnClick));

    updateZip.input.forEach(function (input) {
        input.removeEventListener('input', (updateZipCheck));
    });

    steps.modalUpdateZip.classList.toggle('is-not-displayed');
    steps.modalSecondStep.classList.toggle('is-not-displayed');
    onOwnerChecking(secondStep.ownerCheckBoxes);

}

//===================/ update-zip /==================

function onCorrectZipClick(event) {
    firstStep.correctZip.forEach(function (zip, id) {
        zip.addEventListener('click', (onCorrectZipChect));

        function onCorrectZipChect() {

            if (zip.id === 'zip-is-correct') {
                steps.modalCorrectZip.classList.toggle('is-not-displayed');
                steps.modalSecondStep.classList.toggle('is-not-displayed');
                onOwnerChecking(secondStep.ownerCheckBoxes);
            }

            else {
                steps.modalCorrectZip.classList.toggle('is-not-displayed');
                steps.modalUpdateZip.classList.toggle('is-not-displayed');
                onUpdateZipInputChange(updateZip.input);                
                
            }
            zip.removeEventListener('click', (onCorrectZipChect));
        };
     
    });
};







// const qqq = document.querySelectorAll('.is-not-displayed');

// const www = function eee(array) {
//     array.forEach(element => {
//         element.classList.toggle('is-not-displayed');
//     });
// }
// www(qqq);

