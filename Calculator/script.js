let toCalculate = '';

function addInput(input){
    toCalculate += input;
    console.log(toCalculate);
}
function removeInput(){
    toCalculate = toCalculate.slice(0,-1);
    console.log(toCalculate);
}