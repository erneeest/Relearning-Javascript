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


let add = function(){
    console.log(2+3);
}

function runTwice(fun){
    fun();
    fun();
}

runTwice(add);

function loading(){
    document.querySelector('.start').innerHTML = 'Loading...';
    setTimeout(function(){
        document.querySelector('.start').innerHTML = 'Finished!';
    }, 1000);
}

let timeoutID;
function addedToCart(){
    clearTimeout(timeoutID);
    document.querySelector('.add-text').innerHTML = 'Added';
    timeoutID = setTimeout(function(){document.querySelector('.add-text').innerHTML = ''}, 2000);
}


// continuing 12g.

let numOfMessages = 3;
setInterval(function(){
    if(document.title === 'App'){
        if(numOfMessages > 1){
            document.title = `(${numOfMessages}) New Messages`;
        }else if(numOfMessages === 1){
            document.title = 'New Messages';
        }else{
            document.title = 'App';
        }
    }else{
        document.title = 'App';
    }
},2000);

function addMsg(){
    numOfMessages++;
}

function subMsg(){
    numOfMessages--;
}