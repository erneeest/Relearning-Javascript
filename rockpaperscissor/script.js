let result = '';
let systemParagraph;

const score = {
    wins: 0,
    loses: 0,
    draws: 0
}

console.log(score.wins);

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
        result = 'You Lose!';
    }else if(OR === 'Scissor'){
        result = 'You Win!';
    }

    addScore(OR);
}
function paper(OR = OpponentsResponse()){
    if(OR === 'Rock'){
        result = 'You Win!';
    }else if(OR === 'Paper'){
        result = 'Draw!';
    }else if(OR === 'Scissor'){
        result = 'You Lose!';
    }

    addScore(OR);
}
function scissor(OR = OpponentsResponse()){
    if(OR === 'Rock'){
        result = 'You Lose!';
    }else if(OR === 'Paper'){
        result = 'You Win!';
    }else if(OR === 'Scissor'){
        result = 'Draw!';
    }

    addScore(OR);
}

function addScore(OR){
    if(result === 'You Win!'){
        score.wins++;
    }else if(result === 'You Lose!'){
        score.loses++;
    }else if(result === 'Draw!'){
        score.draws++;
    }

        
    systemParagraph = `Opponent's respone is ${OR} \n${result}`;
    alert(systemParagraph + `\n Wins: ${score.wins} Loses: ${score.loses} Draw: ${score.draws}`);
}

