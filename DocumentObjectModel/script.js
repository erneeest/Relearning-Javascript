// const submitButton = document.querySelector('.submit-button').innerHTML;

// console.log(submitButton);

// console.log(document.title);
// document.title = 'changed';

// console.log(document.body);
// console.log(typeof document.body);

// console.log(document.body.innerHTML);
// document.body.innerHTML = '<h1> CEELINE-JAYNE LOVE OF MY LIFEE!!!!</h1>';


function subscribed(){
    document.querySelector('.subscribe-button').innerHTML = 'Subscribed';
}

function subscribe(){
    document.querySelector('.subscribe-button').innerHTML = 'Subscribe';
}

let isTrue = true;
function subscribeSystem(){
    if(isTrue){
        subscribed();
        isTrue = !isTrue;
    }else{
        subscribe();
        isTrue = !isTrue;
    }
}

let vouchGoal = 50;
let deliveryFee = 10;

document.querySelector('.vouch-goal').innerHTML = vouchGoal;
document.querySelector('.delivery-fee').innerHTML = deliveryFee;

function toCalculate(){
    let userInput = Number(document.querySelector('.user-input').value);
    let addedDeliveryFee = userInput;
    if(toString(userInput).trim() !== ''){

        if(userInput < vouchGoal){
            addedDeliveryFee = userInput + deliveryFee;
        }
        document.querySelector('.js-total-cost').innerHTML = addedDeliveryFee;
    }else{
        console.log('Please enter a number on the input');
    }
}

function handlesCostKeyDown(event){
    console.log(event.key);
    event.key ==='Enter' ? toCalculate() : null;
}

console.log('45' + 5);
console.log('45' - 5);

window.document
window.console.log('window test');
window.alert('a');