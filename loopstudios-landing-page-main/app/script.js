const btnOpenMenu = document.querySelector('#btnOpenMenu');
const btnCloseMenu = document.querySelector('#btnCloseMenu');
const header = document.querySelector("header");
const nav = document.querySelector("header nav");

eventListener();

function eventListener(){
    
    btnOpenMenu.addEventListener('click', mostrarMenu);
    btnCloseMenu.addEventListener('click', mostrarMenu);
}

function mostrarMenu(e){
    e.preventDefault();
    btnOpenMenu.classList.toggle('inline-block');
    btnOpenMenu.classList.toggle('hidden');

    btnCloseMenu.classList.toggle('hidden');
    btnCloseMenu.classList.toggle('inline-block');

    const classesHeader = ['bg-black','absolute','inset-0','px-8','pt-8'];
    classesHeader.forEach(function(el) {
        header.classList.toggle(el);        
        } 
    )

    const classesNav = ['hidden','flex','flex-col','absolute','inset-y-0','text-3xl','tracking-wider','uppercase','space-y-10'];
    classesNav.forEach(function(el) {
        nav.classList.toggle(el);        
        } 
    )
}