// TODO: switch to OOP

// frontend validation

document.getElementById("card-no-input").addEventListener("input", function () {
    let given_number = this.value;
    let cardNo = document.getElementById("card-no");
    if (given_number.length < 17) {
        if (given_number.includes('e')) {
            cardNo.innerText = "Do not use 'e'!";
        }
        new_number = given_number.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '')
        cardNo.innerText = new_number;
    } else if (given_number.length >= 17) {
        cardNo.innerText = "Number is too long!";
    } else {
        cardNo.innerText = "Use digits only!";
    }
});

// MODAL 

// get modal element
let modal = document.getElementById('simpleModal');

// get open modal button
let modalBtn = document.getElementById('modalBtn');

// Get close button
let closeBtn = document.getElementsByClassName('closeBtn')[0];

// listen for open click
modalBtn.addEventListener('click', openModal);

// listen for close click
closeBtn.addEventListener('click', closeModal);

//listen for outside click
window.addEventListener('click', outsideClick);

// function open modal
function openModal() {
    modal.style.display = 'flex';
}

// function close modal
function closeModal() {
    modal.style.display = 'none';
}

// function close modal if outside click;
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}



// open modal first time
if (modal.dataset.view == 3) { modal.style.display = 'flex' }




// Modal content import

let modalBody = document.querySelector(".modal-body")

function fetchModalContent(lang) {
    fetch(`/modal/${lang}`)
        .then(res => res.text())
        .then(data => { modalBody.innerHTML = data })
}

fetchModalContent('PL')


let langValue = document.getElementById("langBtn");
langValue.addEventListener("click", function () {
    if (this.value == 1) {
        fetchModalContent('PL')
        this.innerText = "English";
        this.value = 0;
    } else if (this.value == 0) {
        fetchModalContent('Eng')
        this.innerText = "Polski";
        this.value = 1;
    };
});



