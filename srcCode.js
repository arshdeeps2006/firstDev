let userScore = 0;
let oppScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

let playerScoreParameter = document.querySelector("#user-score");
let oppScoreParameter = document.querySelector("#opponent-score");

const genOppMove = () => {
    // MAPPING:
    // 0 : ROCK
    // 1 : PAPER
    // 2 : SCISSOR

    const moves = ["rock", "paper", "scissor"];
    const id = Math.floor(Math.random() * 3);
    return moves[id];
} 

const evaluate = (playerMove, oppMove) => {

    // DRAW
    if(playerMove == oppMove){
        return 0;
    }

    // WIN 
    if(playerMove === "rock" && oppMove === "scissor"
    || playerMove === "paper" && oppMove === "rock"
    || playerMove === "scissor" && oppMove === "paper"
    ){
        return 1;
    }

    // LOSE
    if(playerMove === "rock" && oppMove === "paper"
    || playerMove === "paper" && oppMove === "scissor"
    || playerMove === "scissor" && oppMove === "rock"
    ){
        return -1;
    }
}

const play = (playerMove) => {
    // generate opponent move
    const oppMove = genOppMove();

    console.log(`Player move debug: ${playerMove}`);
    console.log(`Opponent move debug : ${oppMove}`);

    const score = evaluate(playerMove,oppMove);

    console.log(score);

    // DRAW
    if(score === 0){
        msg.innerText = `draw!`;
        msg.style.backgroundColor = "rgb(229, 224, 137)";
    // LOSE
    }else if(score == -1){ 
        msg.innerText = `You Lose! Opponent's ${oppMove} beats your ${playerMove}`;
        msg.style.backgroundColor = "rgb(188, 87, 87)";
        oppScore++;
        oppScoreParameter.innerText = oppScore;
        // WIN
    }else{
        msg.innerText = `You Win! Your ${playerMove} beats opponent's ${oppMove}`;
        msg.style.backgroundColor = "rgb(152, 237, 145)";
        userScore++;
        playerScoreParameter.innerText = userScore;
    }
}

choices.forEach((choice)=>{
    // console.log(`${choice.id} stored in memory`);

    choice.addEventListener("click", () => {
        const playerMove = choice.id;
        play(playerMove);
    });
});  