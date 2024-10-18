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

document.getElementById('petForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formIsValid = true;

    // Vardas
    const name = document.getElementById('name');
    if (!name.checkValidity()) {
        formIsValid = false;
    }

    // Pavardė
    const surname = document.getElementById('surname');
    if (!surname.checkValidity()) {
        formIsValid = false;
    }

    // Gimimo metai
    const birthYear = document.getElementById('birthYear');
    if (!birthYear.checkValidity()) {
        formIsValid = false;
    }

    // El. paštas
    const email = document.getElementById('email');
    if (!email.checkValidity()) {
        formIsValid = false;
    }

    // Telefono numeris
    const phone = document.getElementById('phone');
    if (!phone.checkValidity()) {
        formIsValid = false;
    }

    // Miestas
    const city = document.getElementById('city');
    if (!city.checkValidity()) {
        formIsValid = false;
    }

    // Kiti laukeliai su validacija
    const fieldsToValidate = ['whyPet', 'petCharacter'];
    fieldsToValidate.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field.checkValidity()) {
            formIsValid = false;
        }
    });

    // Jeigu formoje klaidų nėra, ji sėkmingai pateikiama
    if (formIsValid) {
        alert('Forma pateikta sėkmingai! Artimiausiu metu su Jumis susisieksime.');
    }
});