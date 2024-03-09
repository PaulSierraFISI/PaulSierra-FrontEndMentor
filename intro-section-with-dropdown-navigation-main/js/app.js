const btnOpenMenu = document.querySelector('#menu_open');
const btnCloseMenu = document.querySelector('#menu_close');
const menuOverlay = document.querySelector('#menu-overlay_mobile');
const menuContent = document.querySelector('#menu-content_mobile');
const dropdownOptions = document.querySelectorAll("div.options");
const btnOpenDropdownOptions = document.querySelectorAll("button.dropdown");
const btnDropdownContainer = document.querySelectorAll("div.dropdown-container");

function eventListeners(){
    btnOpenMenu.addEventListener('click', abrirMenu);
    
    btnOpenDropdownOptions.forEach((e) => {
        e.addEventListener("mouseenter", mostrarDropdownMenu);
    })
    btnDropdownContainer.forEach((e) => {
        e.addEventListener("mouseleave", retirarDropDownMenu);
    })
    btnCloseMenu.addEventListener('click', cerrarMenu);
}


function abrirMenu (e) {
    e.preventDefault();
    menuOverlay.classList.remove("hidden");
    menuContent.classList.remove("hidden");
    menuContent.classList.add("flex","bg-white","z-10","absolute","w-60","top-0","right-0","overflow-visible","h-screen","p-4");
}

function cerrarMenu (e) {
    e.preventDefault();
    menuOverlay.classList.add("hidden");
    menuContent.classList.remove("flex","bg-white","z-10","absolute","w-60","top-0","right-0","overflow-visible","h-screen","p-4");
    menuContent.classList.add("hidden");
}

function mostrarDropdownMenu(e){
    e.preventDefault();
    const options = e.target.nextElementSibling;
    options.classList.remove("hidden");
    options.classList.add("flex");
}

function retirarDropDownMenu(e){
    e.preventDefault();
    console.log(e.target.children);
    const options = e.target.children[1];
    options.classList.remove("flex");
    options.classList.add("hidden");
}

eventListeners();