let result = '';
let systemParagraph;

function OpponentsResponse(){
    const randomNum = Math.random();

    if(randomNum < 1/3){
        return 'Rock';
    }else if(randomNum < 2/3){
        return 'Paper';
    }else{
        return 'Scissor';
    }
}
function rock(OR = OpponentsResponse()){
    if(OR === 'Rock'){
        result = 'Draw!';
    }else if(OR === 'Paper'){
        result = 'You Lose';
    }else if(OR === 'Scissor'){
        result = 'You Win';
    }

    systemParagraph = `Opponent's respone is ${OR} \n${result}`;
    alert(systemParagraph);
}
function paper(OR = OpponentsResponse()){
    if(OR === 'Rock'){
        result = 'You Win!';
    }else if(OR === 'Paper'){
        result = 'Draw!';
    }else if(OR === 'Scissor'){
        result = 'You Lose!';
    }

    systemParagraph = `Opponent's respone is ${OR} \n${result}`;
    alert(systemParagraph);
}
function scissor(OR = OpponentsResponse()){
    if(OR === 'Rock'){
        result = 'You Lose!';
    }else if(OR === 'Paper'){
        result = 'You Win!';
    }else if(OR === 'Scissor'){
        result = 'Draw!';
    }
    
    systemParagraph = `Opponent's respone is ${OR} \n${result}`;
    alert(systemParagraph);
}

