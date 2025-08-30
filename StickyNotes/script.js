let userList =  JSON.parse(localStorage.getItem('userList')) || [];

function addFunction(){
    let inputElement = document.querySelector('.user-input');
    const userInput = inputElement.value;
    
    userList.push(userInput);
    inputElement.value = '';

    localStorage.setItem('userList', JSON.stringify(userList));
}

function enterInput(event){
    let inputElement = document.querySelector('.user-input');
    const userInput = inputElement.value;
    if(event.key === 'Enter' && userInput){
        addFunction();
    }
}



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

