// FORM validation

class Validation {
    constructor() {
        this.noInput = document.getElementById("card-no-input");
        this.noOutput = document.getElementById("card-no");
    }
    validateCardNo = () => {
        let given_number = this.noInput.value;
        if (given_number.length < 17 && given_number.length > 0) {
            if (given_number.includes('e')) {
                this.noOutput.innerText = "Do not use 'e'!";
            }
            let new_number = given_number.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/, '')
            this.noOutput.innerText = new_number;
        } else if (given_number.length >= 17) {
            this.noOutput.innerText = "Number is too long!";
        } else {
            this.noOutput.innerText = "Use digits only!";
        }
    }
}

const validate = new Validation()
validate.noInput.addEventListener("input", validate.validateCardNo)


// MODAL display

class Modal {
    constructor() {
        this.modal = document.getElementById('simpleModal');
        this.modalBody = document.querySelector('.modal-content')
        this.modalBtn = document.getElementById('modalBtn');
        this.closeBtn = document.querySelector('.closeBtn');
    }
    openModal = () => {
        this.modal.style.display = 'flex';
        setTimeout(() => this.modal.classList.remove('invisible'), 10);
        setTimeout(() => this.modalBody.classList.add('visible'), 1000);
    }

    openModalFirstTime = () => {
        if (this.modal.dataset.view == 3) {
            this.openModal()
        }
    }

    closeModal = () => {
        this.modalBody.classList.remove('visible')
        setTimeout(() => this.modal.classList.add('invisible'), 1000)
        setTimeout(() => this.modal.style.display = 'none', 2000)
    }

    outsideClick(event) {
        // use only after creating instance of this class in variable named "model"
        if (event.target == modal.modal) {
            modal.closeModal()
        }
    }
}

const modal = new Modal();
modal.openModalFirstTime();
modal.modalBtn.addEventListener('click', modal.openModal);
modal.closeBtn.addEventListener('click', modal.closeModal);
window.addEventListener('click', modal.outsideClick);


// MODAL language change

class Lang {
    constructor() {
        this.modalBody = document.querySelector(".modal-body");
        this.langBtn = document.getElementById("langBtn")
    }
    fetchModalContent = (lang) => {
        fetch(`/modal/${lang}`)
            .then(res => res.text())
            .then(data => { this.modalBody.innerHTML = data })
    }
    changeModalLang = () => {
        if (this.langBtn.value == 1) {
            this.fetchModalContent('PL')
            this.innerText = "English";
            this.langBtn.value = 0;
        } else if (this.langBtn.value == 0) {
            this.fetchModalContent('Eng')
            this.innerText = "Polski";
            this.langBtn.value = 1;
        };
    }
}

const modalLang = new Lang();
modalLang.changeModalLang()
modalLang.langBtn.addEventListener('click', modalLang.changeModalLang)


// Typewritng card-check result

class Typewritng {
    constructor() {
        this.textResult = document.getElementById("flask-output")
        this.iterations = 0
    }
    write = () => {
        let content = this.textResult.dataset.content
        if (this.iterations < content.length) {
            this.iterations++;
            const text = content.slice(0, this.iterations);
            this.textResult.textContent = text

            setTimeout(() => this.write(), 100)
        }
    }
}

const typewriting = new Typewritng();
typewriting.write()


