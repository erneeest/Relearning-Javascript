let userList =  JSON.parse(localStorage.getItem('userList')) || [];

displayFunction();

function addFunction(){
    const inputElement = document.querySelector('.user-input');
    const userInput = inputElement.value;

    const dateElement = document.querySelector('.user-date');
    const userDate = dateElement.value; 
    

    if(userInput){
        userList.push({
            name: userInput,
            date: userDate
        });
        
        inputElement.value = '';
        
        displayFunction();
        
        localStorage.setItem('userList', JSON.stringify(userList));
    }
}

function deleteFunction(i){
    userList.splice(i, 1); 
    displayFunction();
    
    localStorage.setItem('userList', JSON.stringify(userList)); 
}

function enterInput(event){
    let inputElement = document.querySelector('.user-input');
    const userInput = inputElement.value;
    if(event.key === 'Enter' && userInput){
        addFunction();
    }
}

function displayFunction(){
    let todoListHTML = '';
    for(let i=0;i<=userList.length-1;i++){
        const todoObject = userList[i];
        const {name, date} = todoObject;
        const html = `<p>${name}${date}<button onclick="deleteFunction(${i})">Delete</button></p>`;
        todoListHTML += html;
    }
    
    document.querySelector('.todo-list').innerHTML = todoListHTML;
}


// ===============================================
// const myArray = [
//     10, 
//     20, 
//     30
// ];
// console.log(myArray[0]);
// myArray[0] = 99;

// console.log(myArray);

// [1, 'hello', true, { name: 'socks' }, [1,2]];

// console.log(typeof [1, 2]);
// console.log(Array.isArray(myArray));

// console.log(myArray.length);

// myArray.push(100);
// console.log(myArray);

// myArray.splice(3,1);
// console.log(myArray);

//===================================

// const nums = [
//     1,
//     20,
//     22,
//     24,
//     5
// ]

// // nums[getLastValue()] = 99;

// function getLastValue(){
//     return nums.length - 1;
// }

// function arraySwap(arrayNum){
    
//     let firstValue = arrayNum[0];
//     let lastValue = arrayNum[arrayNum.length - 1];

//     arrayNum[0] = lastValue;
//     arrayNum[arrayNum.length-1] = firstValue;

//     return arrayNum;
// }

// console.log(nums);
// console.log(arraySwap(nums));

//======================================

// let arrayNum = [];
// for(let i = 0; i<=10; i+=2){
//     arrayNum.push(i);
// }
// console.log(arrayNum);

// let word = '';
// for(let i = 5; i>=0; i--){
//     word += String(` ${i}`);
// }
// console.log(word);

// let num = 5;
// while(num >= 0){
//     console.log(num);
//     num--;
// }
// ====================================================
// let addOneArray = [-2, -1, 0, 99];

// for(let i = 0; i<=addOneArray.length-1; i++){
//     addOneArray[i] += 1;
// }

// function addOne(arrayNum){
//     let arrayAdded = [];
//     for(let i = 0; i<=arrayNum.length-1; i++){
//         arrayAdded[i] = arrayNum[i] + 1;
//     }
//     return arrayNum;
// }

// console.log(addOne(addOneArray));
// ===========================================================

// let arrayNums = [-2, -1, 0, 99];
// let num = 2;

// function addNum(array, num){
//     let addedArray = [];
//     for(let i = 0; i<=arrayNums.length-1; i++){
//         addedArray[i] = array[i] + num;
//     }
//     return addedArray;
// }
// console.log(addNum(arrayNums, num));
//========================================================

// let arrayNums = [1, 2, 3];
// let num = [4, 5, 6];

// function addNum(array, num){
//     let addedArray = [];
//     for(let i = 0; i<=arrayNums.length-1; i++){
//         addedArray[i] = array[i] + num[i];
//     }
//     return addedArray;
// }
// console.log(addNum(arrayNums, num));
// =========================================================

// let arrayNums = [-2, 3, -5, 7, 10];

// function countPositive(array){
//     let posCount = 0;
//     for(let i = 0; i<=array.length-1; i++){
//         if(array[i]>0){
//             posCount++;
//         }
//     }
//     return posCount;
// }

// console.log(countPositive(arrayNums));
// =========================================================

// let arrayNums = [0,1];

// function minMax(array){
    
//     let minMax = {
//         min: null,
//         max: null
//     }

//     if(array.length!==1){
//         for(let i = 0; i<=array.length-1;i++){
//             if(array[i]<=minMax.min){
//                 minMax.min = array[i];
//             }
//             if(array[i]>=minMax.max){
//                 minMax.max = array[i];
//             }
//         }
//     }else{
//         minMax.min = array[0];
//         minMax.max = array[0];
//     }
//         return minMax;
// }

// // console.log(arrayNums);
// console.log(minMax(arrayNums));

// =========================================================

// let words = ['apple', 'grape', 'apple', 'apple'];

// function wordCount(wordArray){

//     let wordCounter = {

//     }
//     for(let i = 0; i<=wordArray.length-1;i++){
//         wordCounter[wordArray[i]] = (wordCounter[wordArray[i]] || 0) + 1;
//     }
//     return wordCounter;
// }

// console.log(wordCount(words));

//======================= Loops and Arrays ============================
// let word = 'good';
// let array1 = ['hello', 'world', 'search', 'good'];
 
// function findIndex(array, word){
//     for(let i = 0; i<array.length;i++){
//         if(array1[i]===word){
//             console.log(i);
//             break;
//         }else if(i === array1.length-1){
//             console.log(-1);
//         }
//     }
// }

// findIndex(array1, word);


// let foods = ['egg','apple','egg','egg','ham'];
// function removeEgg(foods){
//     const foodsCopy = foods.slice();
//     foodsCopy.reverse();
//     let countToRemove = 2;
//     let result = [];
//     for(let i=0; i<foodsCopy.length;i++){
//         if(foodsCopy[i]==='egg' && countToRemove>0){
//             countToRemove--;
//             continue;
//         }
//         result.push(foodsCopy[i]);
//     }
//     return result.reverse();
// }
// console.log(removeEgg(foods));
// console.log(foods);

// let nums = [];
// for(let i=1;i<=20;i++){
//     if(i%3===0 && i%5===0){
//         nums.push('FizzBuzz')
//     }else if(i%3 === 0){
//         nums.push('Fizz');
//     }else if(i%5 === 0){
//         nums.push('Buzz');
//     }else{
//         nums.push(i);
//     }
// }
// console.log(nums);


// const colors = ['green', 'white', 'red', 'blue', 'red', 'blue'];
// function findIndex(array, word){

//     let finalIndex;
//     for(let i=0;i<array.length;i++){
//         if(array[i]===word){
//             finalIndex = i;
//             break;
//         }
//     }
//     return finalIndex;
// }
// function uniqueFun(array){
//     let newUnique = [];
//     for(let i=0;i<array.length;i++){
//         if(!findIndex(newUnique, array[i])){
//             newUnique.push(array[i]);
//         }
//     }
//     return newUnique;
// }
// console.log(uniqueFun(colors));

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