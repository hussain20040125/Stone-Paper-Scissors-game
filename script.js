let userChoice = 0;
let compChoice = 0;

let userScore = document.querySelector("#user-score")
let compScore = document.querySelector("#comp-score")

let msg = document.querySelector("#msg");

let userCount = 0;
let compCount = 0;

const choices = document.querySelectorAll(".choice")

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return option[randIdx];
}
const drawGame = () => {
    msg.innerText = "Game is Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin) => {
    if (userWin === true) {
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
        userCount++;
        userScore.innerText = userCount
    }
    else {
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        compCount++;
        compScore.innerText = compCount

    }
}

const playGame = (userChoice) => {
    // console.log("user-choice = ", userChoice)
    const compChoice = genCompChoice();
    // console.log("comp-choice = ", compChoice)
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
}) 