const refs = {
    backdrop: document.querySelector('.backdrop'),
    modalForm: document.querySelector('.modal__form'),
    modalFormBtn: document.querySelector('.modal__btn'),
    modalCloseBtn: document.querySelector('.modal__close-btn'),
    body: document.querySelector('body'),
    modal:document.querySelector(".modal"),

};

 console.log(refs.modalForm);


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

//=================== date ============
// const minDate = new Date();
// const getmaxDate = function(date){
// 		const day = date.getDate();
// 		const month = date.getMonth() + 1;
//         const year = date.getFullYear()+2;
    
// 		return month + '/' + day + '/' + year ;
// };
    
// console.log(minDate);
    
// const maxDate = new Date(minDate.setDate(minDate.getDate() + 150)
// );
// console.log(maxDate);
 

// const dsv = Date.parse(maxDate)
//  console.log(dsv);

const date = new Date();

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

 console.log(date);

 
const today =
	addZero(date.getFullYear()) + '-' + 
	addZero(date.getMonth() + 1) + '-' +
    addZero(date.getDate());


    
const maxDate = new Date(date.setDate(date.getDate() + 150));
console.log(maxDate);
 
const yesterday = new Date(date.setDate(date.getDate() -151));
console.log(yesterday); 
    
const maxDateCorrect =
	addZero(maxDate.getFullYear() + 1) + '-' + 
	addZero(maxDate.getMonth() + 1) + '-' +
    addZero(maxDate.getDate());
console.log(maxDateCorrect);
     

const yesterdayCorrect = 
addZero(yesterday.getFullYear() ) + '-' + 
	addZero(yesterday.getMonth()+1) + '-' +
    addZero(yesterday.getDate()-1);
console.log(yesterdayCorrect);
    
//===================/ date /============



//=================== formData ============





refs.modalForm.addEventListener('submit', modalFormSubmit);

function modalFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append('object', address.formatted_address);

    console.log(formData);
  
 console.log(address.formatted_address);

       // let response = await fetch('sendmail.php', {
			// 	method: 'POST',
			// 	body: formData
            // });
            
            // if (response.ok) {
			// 	let result = await response.json();
			// 	alert(result.message);
			// 	form.reset();
			// } else {
			// 	alert("Ошибка");
            // }



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
     console.log(losDate);
    
    if (losDate >= today && losDate <= maxDateCorrect) {

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

let expDate;

function onExpiredDateInutChange(event) {
    expDate = event.currentTarget.value;
    expiredDate.buttonNext.disabled = !expDate;
    
    if (expDate >= today && expDate <= maxDateCorrect) {
        expiredDate.buttonNext.addEventListener('click', onExpiredDateButtonNextClick);
    };

    console.log(zipCode);
};




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
remuveExpDate();
    
    
    
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

function remuveExpDate(){
    loseDate.input.value = yesterdayCorrect;
 
    
}




function remuveLosDate(){
    expiredDate.input.value = yesterdayCorrect;
    console.log('qweqweqweqweqwe');
    
}




function onSixthModalStepCheckBoxYesClick(event) {
    console.log('yes agent');

    steps.modalSixthStep.classList.toggle('is-not-displayed');
    steps.modalListing.classList.toggle('is-not-displayed');
    sixthModalStep.checkBoxNo.removeEventListener('click', (onSixthModalStepCheckBoxNoClick));
    sixthModalStep.buttonPrev.removeEventListener('click', (onSixthModalStepButtonPrevClick));
    expiredDate.input.addEventListener('input', onExpiredDateInutChange);
    expiredDate.buttonPrev.addEventListener('click', (onExpiredDateButtonPrevClick));
    remuveLosDate();

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

    sixthModalStep.buttonPrev.removeEventListener('click', (onSixthModalStepButtonPrevClick));


}

 console.log("2023-05-12">"2023-05-11");

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
    scrollTo0Modal();
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
function scrollTo0Modal() { 
        
        refs.modal.scrollTo(0,0); // Скролл первого элемента данного класса прокручиваем до нужного положения
    }
 console.log(fourthModalStep.checkBox);


function onFourthModalStepButtonNextClick(event) {
    steps.modalFifthStep.classList.toggle('is-not-displayed');
    steps.modalFourthStep.classList.toggle('is-not-displayed');
    fourthModalStep.checkBox.removeEventListener('click', (onReasonsItemClick)) ;
    fifthModalStep.checkBox.addEventListener('click', (onRepairsItemClick));
    fifthModalStep.buttonPrev.addEventListener('click', (onFifthModalStepButtonPrevClick));
    scrollTo0Modal();
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
        userDataCheck();
        input.addEventListener('input', (userDataCheck1));
        
    });
};


 
function userDataCheck1(event) {
         console.log(lastStep.input[0].value, lastStep.input[1].value,lastStep.input[2].value);
        
    if (lastStep.input[0].value &&
        lastStep.input[1].value &&
        lastStep.input[2].value) {
                //  console.log(lastStep.input[0].value,lastStep.input[1].value,lastStep.input[2].value);

            // lastStep.btn.disabled = !lastStep.input[0].value;   
            lastStep.btn.addEventListener('click', onLastStepBtnClick);
    };
    
};

 

function userDataCheck() {
 console.log(lastStep.input[0].value,lastStep.input[1].value,lastStep.input[2].value);        
    if (lastStep.input[0].value &&
        lastStep.input[1].value &&
        lastStep.input[2].value) {
                //  console.log(lastStep.input[0].value,lastStep.input[1].value,lastStep.input[2].value);

            // lastStep.btn.disabled = !lastStep.input[0].value&& !lastStep.input[1].value&&!lastStep.input[2].value;   
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
        userDataCheck();
        input.addEventListener('input', (userDataCheck1));
        
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
 const address = {};
        let autocomplete;
        function initAutocomplete() {
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById('pac-input'),

                {
                    types: ['address'],
                    componentRestrictions: { country: ["us"] },
                    // fields: ["address_components"],
                    // fields: ["address"],
                    // fields: ['place_id', 'geometry', 'name'],
                });


            autocomplete.addListener('place_changed', onPlaceChange);
        }

let place;

function onPlaceChange() {
  place = autocomplete.getPlace();

 
  //     alert(place.name);
  console.log(place);
  console.log(place.address_components);

parseAddress(place);
 

  

}


  const parseAddress = (place) => {
        // const address = {};
              console.log(address);
        if (!Array.isArray(place.address_components)) {
            throw Error('Address Components is not an array')
        }
        if (!place.address_components.length) {
            throw Error('Address Components is empty')
        }
        const isStreetNumber = (component) => {
            return component.types.includes('street_number')
        }
        const isStreetName = (component) => {
            return component.types.includes('route')
        }
    const isCity = (component) => {
        if (component.types.includes('locality') || component.types.includes('sublocality') ||
            component.types.includes('administrative_area_level_3')) {
            return !0
        } else if (component.types.includes('neighborhood') && component.types.includes('political')) {
            address.prev_city_component = 'neighborhood'; return !0
        } else { return !1 }
    }
    const isState = (component) => {
        return component.types.includes('administrative_area_level_1')
    }
    const isCountry = (component) => {
        return component.types.includes('country')
    }
    const isCounty = (component) => {
        return component.types.includes('administrative_area_level_2')
    }
    const isPostalCode = (component) => {
        return component.types.includes('postal_code')
    }
    const isStreetAddress = (component) => {
        return component.types.includes('street_address')
        }
        

    for (const addressComponent of place.address_components) {
        const component = addressComponent;
        if (isStreetNumber(component)) {
            address.street_number = component.long_name
        }
        if (isStreetName(component)) {
            address.street_name = component.long_name
        }
        if (isCity(component) && (!address.city || address.prev_city_component === 'neighborhood')) {
            address.city = component.long_name
        }
        if (isCountry(component)) {
            address.country = component.long_name
        }
        if (isCounty(component)) {
            address.county = component.long_name
        }
        if (isState(component)) {
            address.state = component.long_name
        }
        if (isPostalCode(component)) {
            address.postal_code = component.long_name
        }
    }
    if (place.types.includes('locality')) {
        address.type = 'city'
    } else if (place.types.includes('administrative_area_level_1')) {
        address.type = 'state'
    } else if (place.types.includes('street_address') || place.types.includes('route') || place.types.includes('premise')) {
        address.type = 'street_address'
    } else if (place.types.includes('lcountry')) {
        address.type = 'country'
    } else {
        address.type = null
    }
    address.formatted_address = place.formatted_address;
      console.log(address);
      	
    //  document.getElementById('bbbbb').innerHTML = address.formatted_address;
     return address

     
}



          // ==============================



       

            // if (!place.address_components) {
            //     document.getElementById('aaaa').placeholder = 'Entre a place';
            //     confirm('qqq')
            // } else {
            //     document.getElementById('bbbbb').innerHTML = place.name;
            //     alert(place.name);
            // }
        




let zipCode;

function onInutChange(event) {
    zipCode = event.currentTarget.value;
    firstStep.btn.disabled = !zipCode;

    





    if (zipCode) {
        firstStep.btn.addEventListener('click', onfirstStepBtnClick);
    };

    
};
console.log(firstStep.input);
console.log(firstStep.input.value);



function onfirstStepBtnClick(event) {
    steps.modalFirst.classList.toggle('is-not-displayed');
    steps.modalCorrectZip.classList.toggle('is-not-displayed');
    firstStep.btn.removeEventListener('click', onfirstStepBtnClick);
    firstStep.input.removeEventListener('input', onInutChange);
    firstStep.zipCodeCheck.textContent = address.formatted_address;
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


loseDate.input.min = today;
expiredDate.input.min = today;

loseDate.input.max = maxDateCorrect;
expiredDate.input.max = maxDateCorrect;

 console.log(loseDate.input.min);


 
 console.log(typeof(today));


// const qqq = document.querySelectorAll('.is-not-displayed');

// const www = function eee(array) {
//     array.forEach(element => {
//         element.classList.toggle('is-not-displayed');
//     });
// }
// www(qqq);

