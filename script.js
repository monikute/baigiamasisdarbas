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