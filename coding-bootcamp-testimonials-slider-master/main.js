import data from './db/data.js'

const btnLeft = document.querySelector('#btn-l');
const btnRight = document.querySelector('#btn-r');
const userTestimony = document.querySelector('#user_testimony');
const userName = document.querySelector('#user_name');
const userJob = document.querySelector('#user_job');
const userImg = document.querySelector('#user_image');
let i = 0;

function cambiarContenido(e){
    e.preventDefault();
    if(i == data.length){
        i = 0;
    }
    userTestimony.textContent = data[i].testimony;
    userName.textContent = data[i].name ;
    userJob.textContent = data[i].job;
    userImg.src=data[i].image;
    i++;
}

function cargarEventListeners(){
    btnLeft.addEventListener('click', cambiarContenido);
    btnRight.addEventListener('click', cambiarContenido);

    document.addEventListener('DOMContentLoaded', ()=>{
        userTestimony.textContent = data[i].testimony;
        userName.textContent = data[i].name ;
        userJob.textContent = data[i].job;
        userImg.src=data[i].image;
        i++;
        // console.log(data[i].testimony);
        // console.log(data[i].name);
        // console.log(data[i].job);
        // console.log(data[i].image);
    })

    document.addEventListener('click', function(event) {
        console.log('Elemento clickeado:', event.target);
    })
}

cargarEventListeners();

