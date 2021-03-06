'use strict';

// document.querySelector(" .message").textContent = "correct Number";

let guessedNumber = Math.floor(Math.random() * 21)
let score = 20
let highscore = 0;

const showMessage = (message) => {
    document.querySelector(".message").textContent = message
};



document.querySelector(".check").addEventListener("click", function (){
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess);

    if(!guess) {
        showMessage("No input");
        // document.querySelector(".message").textContent = "No input";
    } else if (guess === guessedNumber){
        document.querySelector(" .message").textContent = "correct Number";
        document.querySelector(".number").textContent = guessedNumber;
        document.querySelector("body").style.backgroundColor = "#A3DA8D";
        document.querySelector(".number").style.width = "30rem";

        if(score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }

    } else if (guess !== guessedNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > guessedNumber ? " Too high!" : "Too low!";
            score--;
            document.querySelector('.score').textContent = score;
           } else {
            document.querySelector('.message').textContent =  "You lost the game!";
            document.querySelector('.score').textContent = 0;
         }
    }
    // else if (guess < guessedNumber){
    //     if (score > 1) {
    //             document.querySelector('.message').textContent = " Too low!";
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //            } else {
    //             document.querySelector('.message').textContent =  "You lost the game!";
    //             document.querySelector('.score').textContent = 0;
    //          }
        

    // }else if (guess > guessedNumber){
    //     if (score > 1) {
    //     document.querySelector(" .message").textContent = "Too high !"
    //     score--;
    //     document.querySelector(".score").textContent = score;} else {
    //         document.querySelector(".message").textContent = "You lost the game!";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }
});

document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    guessedNumber = guessedNumber = Math.floor(Math.random() * 21);

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").textContent = " ";

    document.querySelector("body").style.backgroundColor = "#eeeeee";
    document.querySelector(".number").style.width = "15rem";



})