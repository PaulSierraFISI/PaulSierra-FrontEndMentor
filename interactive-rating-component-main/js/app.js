//variables
const btnSubmit = document.querySelector('.submit');
const ratings = document.querySelectorAll('.rating');
const rateHTML = document.querySelector('.thankyou--rate');
const containerRate = document.querySelector('#cardRating');
const containerResult = document.querySelector('#cardResult');
let rate;
//Events
cargarEventListeners();
function cargarEventListeners(){
    ratings.forEach((rating)=>{
        rating.addEventListener('click',activeBtn);
        rating.addEventListener('mouseenter',hoverBtn);
        rating.addEventListener('mouseout',removeHoverBtn);
        
    });
    btnSubmit.addEventListener('click',showResult);
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

function showResult(){
    rateHTML.textContent = `You selected ${rate} out of 5`;
    containerRate.classList.add('no-display');
    containerResult.classList.remove('no-display');
}