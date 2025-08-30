let result = '';



function resetScore(){
    score.wins = 0;
    score.loses = 0;
    score.draws = 0;
    
    document.querySelector('.scoring').innerHTML = `\n Wins: ${score.wins} Loses: ${score.loses} Draw: ${score.draws}`;

    localStorage.removeItem('score');
    console.log('reset');
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    draws: 0
};
document.querySelector('.scoring').innerHTML = `\n Wins: ${score.wins} Loses: ${score.loses} Draw: ${score.draws}`;

// if(!score){
//     score = {
//         wins: 0,
//         loses: 0,
//         draws: 0
//     }
// }

function OpponentsResponse(){
    const randomNum = Math.random();

    if(randomNum < 1/3){
        document.querySelector('.oppMove').src = 'images/rock.png';
        return 'Rock';
    }else if(randomNum < 2/3){
        document.querySelector('.oppMove').src = 'images/paper.png';
        return 'Paper';
    }else{
        document.querySelector('.oppMove').src = 'images/scissor.png';
        return 'Scissor';
    }
}
function rock(OR = OpponentsResponse()){
    document.querySelector('.urMove').src = 'images/rock.png';
   
    if(OR === 'Rock'){
        result = 'Draw!';
    }else if(OR === 'Paper'){
        result = 'You Lose!';
    }else if(OR === 'Scissor'){
        result = 'You Win!';
    }

    displayMoves('Rock', OR);

    addScore();
}
function paper(OR = OpponentsResponse()){
    document.querySelector('.urMove').src = 'images/paper.png'

    if(OR === 'Rock'){
        result = 'You Win!';
    }else if(OR === 'Paper'){
        result = 'Draw!';
    }else if(OR === 'Scissor'){
        result = 'You Lose!';
    }

    displayMoves('Paper', OR);

    addScore();
}
function scissor(OR = OpponentsResponse()){
    document.querySelector('.urMove').src = 'images/scissor.png';

    if(OR === 'Rock'){
        result = 'You Lose!';
    }else if(OR === 'Paper'){
        result = 'You Win!';
    }else if(OR === 'Scissor'){
        result = 'Draw!';
    }

    displayMoves('Scissor', OR);

    addScore();
}

function displayMoves(YM, OR){
    document.querySelector('.urMove').innerHTML = YM;
    document.querySelector('.oppMove').innerHTML = OR;

    // document.querySelector('.UM').src = 'cat-meme.png'; //THIS IS COOL!!!!!
    // console.log(document.querySelector('.UM').src); //THIS IS COOL!!!!!
}

function addScore(){
    if(result === 'You Win!'){
        score.wins++;
    }else if(result === 'You Lose!'){
        score.loses++;
    }else if(result === 'Draw!'){
        score.draws++;
    }
    
    localStorage.setItem('score' ,JSON.stringify(score));
    document.querySelector('.scoring').innerHTML = `\n Wins: ${score.wins} Loses: ${score.loses} Draw: ${score.draws}`;
}

// console.log('hello'.length);
// console.log('hello'.toUpperCase());

// const object1 = {
//     message: 'hello',
// };
// const object2 = object1;

// object1.message = 'Good job!';
// console.log(object2);

// const object3 = {
//     message: 'Good job!',
// }
// console.log(object3 === object1);
// console.log(object2 === object1);

// const object4 = {
//     message: 'Good job!',
//     price: 799
// }

// // const message = object4.message;
// const { message, price } = object4;
// console.log(message);
// console.log(price);

// const object5 = {
//     // message: message
//     message,
//     // method: function function1(){
//     //     console.log('method');
//     // }
//     method(){
//         console.log('method');
//     }
// };
// console.log(object5);

// object5.method();


