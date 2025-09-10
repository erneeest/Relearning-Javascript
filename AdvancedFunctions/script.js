const { log } = console;

// greeting();
// function greeting(){
//     log('Hello');
// }

// const num = 2;
// const function1 = function(){
//     log('Nice One');
// }

// log(function1);
// log(typeof function1);
// function1();

// const object1 = {
//     num: 2,
//     fun: function(){
//         log('Hello 3');
//     }
// };
// object1.fun();

// function display(param){
//     log(param);
// }
// display(2);

// function run(param){
//     param();
// }
// run(function(){
//     log('hello4');
// });

// setTimeout(function(){log('BANG!')}, 3000);
// log('hi');

// setInterval(function(){log('hiHo');}, 1000);

// ['make diner',
//  'wash dishes',
//  'watch youtube'
// ].forEach(function(value, i){
//     log(i);
//     log(value);
// });

// =============================== Advanced Functions pt.1 Exercises ================================================================
// let add = function(){
//     console.log(2+3);
// }

// function runTwice(fun){
//     fun();
//     fun();
// }

// runTwice(add);

// function loading(){
//     document.querySelector('.start').innerHTML = 'Loading...';
//     setTimeout(function(){
//         document.querySelector('.start').innerHTML = 'Finished!';
//     }, 1000);
// }

// let timeoutID;
// function addedToCart(){
//     clearTimeout(timeoutID);
//     document.querySelector('.add-text').innerHTML = 'Added';
//     timeoutID = setTimeout(function(){document.querySelector('.add-text').innerHTML = ''}, 2000);
// }


// // continuing 12g.

// let numOfMessages = 3;
// setInterval(function(){
//     if(document.title === 'App'){
//         if(numOfMessages > 1){
//             document.title = `(${numOfMessages}) New Messages`;
//         }else if(numOfMessages === 1){
//             document.title = 'New Messages';
//         }else{
//             document.title = 'App';
//         }
//     }else{
//         document.title = 'App';
//     }
// },2000);

// function addMsg(){
//     numOfMessages++;
// }

// function subMsg(){
//     numOfMessages--;
// }
// =============================== Advanced Functions pt.2 ================================================================
//Shorter way to write a function 

// () => {} is like function(){}

/*
let regularFunction = function(param){
    console.log(param);
}

let arrowFunctionParams = (param1, param2) => { // use () if the param is 2 or more
    console.log()
}

let arrowFunction = param => { // () is optional if there's only one parameter
    console.log(param);
}

let oneLineFunction = param => param + 5; // {} is optional if it's only one line function ... return param + 5

console.log(oneLineFunction(5));

// arrowFunction is recommended if you're passing a function into another function

const objext = {
    method: () => {},
    method(){

    }
}*/
// =================

let greet = () => {console.log('Hello Gang!');};

let startButton = document.querySelector('.start');
startButton.addEventListener('click', () => {
    loading();
});

startButton.addEventListener('click', greet);

// startButton.removeEventListener('click', greet);


function loading(){
    document.querySelector('.start').innerHTML = 'Loading...';
    setTimeout(function(){
        document.querySelector('.start').innerHTML = 'Finished!';
    }, 1000);
}
// ==================================================== Works like forEach but creates a new array
//================================== filter()
// console.log([1, -6, 9, ,10, -100, 2].filter((value, index) => {
//     if(value < 0){
//         return false;
//     }else{
//         return true;
//     }
// }));

console.log([1, -6, 9, ,10, -100, 2].filter(value => value >= 0));

//================================== map()

// console.log([1, 3, 2].map((value, index) => {
//     return value * 2;
// }));

console.log([1, 3, 2].map(value => value * 2));
