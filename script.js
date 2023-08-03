let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissor");

let hand = [stone , paper, scissors]

let i = Math.floor(Math.random()*3);
console.log(i);

stone.addEventListener("click", Gamestone);
paper.addEventListener("click", Gamepaper);
scissors.addEventListener("click", Gamescissor);

points = 0;


function Gamestone(){
    let i = Math.floor(Math.random()*3);
    let comp = hand[i];

    if(hand[i] === paper){
        document.getElementById("result").innerHTML = "You Won!"
    } else if(hand[i] === stone){
        document.getElementById("result").innerHTML = "Game tied!"
    } else {
        document.getElementById("result").innerHTML = "You Lost ):";
    }
} 

function Gamepaper(){
    let i = Math.floor(Math.random()*3);
    let comp = hand[i];

    if(hand[i] === scissors){
        document.getElementById("result").innerHTML = "You Won!"
    } else if(hand[i] === paper){
        document.getElementById("result").innerHTML = "Game tied!"
    } else {
        document.getElementById("result").innerHTML = "You Lost ):";
    }
}

function Gamescissor(){
    let i = Math.floor(Math.random()*3);
    let comp = hand[i];

    if(hand[i] === stone){
        document.getElementById("result").innerHTML = "You Won!"
    } else if(hand[i] === scissors){
        document.getElementById("result").innerHTML = "Game tied!,Let's Go Again"
        Gamestone();
    } else {
        document.getElementById("result").innerHTML = "You Lost ):";
    }
}


