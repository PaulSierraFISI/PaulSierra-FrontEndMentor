const headerNav = document.querySelector('#header__nav');
const headerAction = document.querySelector('#header_action');
const heroBg = document.querySelector('#hero__bg');

eventListeners();

function eventListeners(){
    headerAction.addEventListener('click', mostrarMenu);
}

function mostrarMenu(e){
    e.preventDefault();
        headerNav.classList.toggle("scale-0");
        headerNav.classList.toggle("scale-100");
        heroBg.classList.toggle("bg-none");
}