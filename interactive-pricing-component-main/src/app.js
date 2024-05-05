//Inputs
const inputRange = document.querySelector('input[type="range"]');
const billingCheckbox =  document.querySelector('#billingCheckbox');

//UI
const pageviews = document.querySelector('#pageviews');

const billingDescription =  document.querySelector('#billingDescription');

console.log(billingDescription.textContent);
const doc = document.documentElement.style;
const price = 0.00;

const checkboxIsActive = false;

eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', actualizarUI);
    
    inputRange.addEventListener('input', actualizarUI);
    billingCheckbox.addEventListener('click', actualizarUI);
}

function startUI(){
    doc.setProperty('--RANGE-VALUE', `${inputRange.value}%`);
    console.log(inputRange.value);
    console.log(doc.getPropertyValue('--RANGE-VALUE'));
}


function actualizarUI(e){
    console.log(billingCheckbox.checked);
    doc.setProperty('--RANGE-VALUE', `${inputRange.value}%`);
    getPageViewsAndPrice(inputRange.value, billingCheckbox.checked);
    console.log("################")
    console.log(inputRange.value);
    console.log(doc.getPropertyValue('--RANGE-VALUE'));
    console.log(pageviews.textContent);

}

function getPageViewsAndPrice(inputRangeValue, checkboxIsActive){
    let price;
    let amount;
    let billing;
    if(inputRangeValue <25){
        amount = "10K";
        price = 8.00;
    }else if(inputRangeValue <50){
        amount = "50K";
        price = 12.00;
    }else if(inputRangeValue <75){
        amount = "100K";
        price = 16.00;
    }else if(inputRangeValue <100){
        amount = "500K";
        price = 24.00;
    }else{
        amount = "1M";
        price = 36.00;
    }
    pageviews.textContent = `${amount} pageviews`;
    if (checkboxIsActive){
        price = price *12 * 0.75;
        billing = "year";
    }else {
        billing = "month";
    }
    
    console.log(billingDescription.children);
    billingDescription.innerHTML = `<span class="text-3xl font-extrabold text-blue-950 md:text-4xl">$${price.toFixed(2)}</span>/${billing}`;

}


function actualizarPrecio(e){
    
}