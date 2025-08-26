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