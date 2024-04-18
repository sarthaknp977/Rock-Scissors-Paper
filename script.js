let choices = ['rock', 'scissors', 'paper'];

let rock = document.querySelector('.rock');
let scissors = document.querySelector('.scissors');
let paper = document.querySelector('.paper');

let opponentChoice = document.querySelector('.computer-choice');
let buttons = document.querySelector('.buttons');
let randomNumber = Math.floor(Math.random() * choices.length);

let computerChoice = choices[randomNumber];

let start = document.querySelector('.start-game');
let drawWindow = document.querySelector('.draw-window');
let lostWindow = document.querySelector('.lost-window');
let winningWindow = document.querySelector('.winning-window');




function startGame() {
    clearWindow();
    randomNumber = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomNumber];
    buttons.style.display = 'flex';
    start.style.display = 'none';
    rock.addEventListener('click', function () {

        if (computerChoice === 'rock') {
            draw();
        }
        else if (computerChoice === 'paper') {
            youLost();
        }
        else {
            youWon();
        }
    })

    paper.addEventListener('click', function () {
        if (computerChoice === 'paper') {
            draw();

        }
        else if (computerChoice === 'scissors') {
            youLost();
        }
        else {
            youWon();
        }
    })

    scissors.addEventListener('click', function () {
        if (computerChoice === 'scissors') {
            draw();
        }
        else if (computerChoice === 'rock') {
            youLost();
        }
        else {
            youWon();
        }
    })
}


function draw() {
    clearWindow();
    opponentChoice.textContent = 'Computer chose ' + computerChoice;
    drawWindow.style.display = 'flex';
}

function youLost() {
    clearWindow();
    opponentChoice.textContent = 'Computer chose ' + computerChoice;
    lostWindow.style.display = 'flex';
}
function youWon() {
    clearWindow();
    opponentChoice.textContent = 'Computer chose ' + computerChoice;
    winningWindow.style.display = 'flex';
}

start.addEventListener('click', function () {
    startGame();
});

function clearWindow() {
    drawWindow.style.display = 'none';
    winningWindow.style.display = 'none';
    lostWindow.style.display = 'none';
    buttons.style.display = 'none';
    start.style.display = 'grid';
    opponentChoice.textContent = '';
}