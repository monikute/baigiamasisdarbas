document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');
    const allNavLinks = document.getElementsByClassName("nav-links");

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    for (i = 0; i < allNavLinks.length; i++){
        allNavLinks[i].addEventListener('click', () => {
            navLinks.classList.remove("active");
    });
    }

    const petForm = document.getElementById('petForm');

    petForm.addEventListener('submit', (event) => {
        
        event.preventDefault();

        let formIsValid = true;

        const name = document.getElementById('name');
        if (!name.checkValidity()) {
            formIsValid = false;
        }

        const surname = document.getElementById('surname');
        if (!surname.checkValidity()) {
            formIsValid = false;
        }

        const birthYear = document.getElementById('birthYear');
        if (!birthYear.checkValidity()) {
            formIsValid = false;
        }

        const email = document.getElementById('email');
        if (!email.checkValidity()) {
            formIsValid = false;
        }

        const phone = document.getElementById('phone');
        if (!phone.checkValidity()) {
            formIsValid = false;
        }

        const city = document.getElementById('city');
        if (!city.checkValidity()) {
            formIsValid = false;
        }

        const fieldsToValidate = ['whyPet', 'petCharacter'];
        fieldsToValidate.forEach(function(fieldId) {
            const field = document.getElementById(fieldId);
            if (!field.checkValidity()) {
                formIsValid = false;
            }
        });

        if (formIsValid) {
            alert('Forma pateikta sėkmingai! Artimiausiu metu su Jumis susisieksime.');
        }
    });
});  