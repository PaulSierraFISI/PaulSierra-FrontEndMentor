//variables
const btnSubmit = document.querySelector('.submit');
const ratings = document.querySelectorAll('.rating');
let rate;
//Events
cargarEventListeners();
function cargarEventListeners(){
    ratings.forEach((rating)=>{
        rating.addEventListener('click',activeBtn);
        rating.addEventListener('mouseenter',hoverBtn);
        rating.addEventListener('mouseout',removeHoverBtn);
        
    });
    btnSubmit.addEventListener('click',enviarResultado);
}

//funciones
function activeBtn(e){
    const estilos = e.target.classList;
    
    //cleaning all ratings
    ratings.forEach(rating=>{
        rating.classList.remove('rating--active');
    });
       
    if (estilos.contains('rating--hover')){
        estilos.remove('rating--hover');
    }
    estilos.add('rating--active');
    rate = parseInt(e.target.textContent);
    console.log(rate);

}   

function hoverBtn(e){
    const estilos = e.target.classList;
    if(!estilos.contains('rating--active')){
        estilos.add('rating--hover');
    }
}

function removeHoverBtn(e){
    const estilos = e.target.classList;
    if(estilos.contains('rating--hover')){
        estilos.remove('rating--hover');
    }
}

function enviarResultado(){
    
}