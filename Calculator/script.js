let toCalculate = JSON.parse(localStorage.getItem('toCalculate')) || '';

function addInput(input){
    toCalculate += input;

    console.log(toCalculate);
    saveLocalStorage();
}

function removeInput(){
    toCalculate = toCalculate.slice(0,-1);
    if(toCalculate){
        console.log(toCalculate);
        saveLocalStorage();
    }else{
        console.log('Enter a number');
    }
}
function saveLocalStorage(){
    localStorage.setItem('toCalculate', JSON.stringify(toCalculate));
}
