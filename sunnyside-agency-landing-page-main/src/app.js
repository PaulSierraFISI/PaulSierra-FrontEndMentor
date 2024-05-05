const headerNav = document.querySelector('#header__nav');
const headerAction = document.querySelector('#header_action');
const iconArrowDown = document.querySelector('#icon-arrow-down');

eventListeners();

function eventListeners(){
    headerAction.addEventListener('click', mostrarMenu);
}

function mostrarMenu(e){
    e.preventDefault();
        headerNav.classList.toggle("scale-0");
        headerNav.classList.toggle("scale-100");
        iconArrowDown.classList.toggle("scale-0");
        iconArrowDown.classList.toggle("animate-bounce")
        iconArrowDown.classList.toggle("scale-100");
}