function random(num) {
    return Math.floor(Math.random() * num) + 1;
}

function computerPlay() {
    return ['rock' ,'paper', 'scissor'][random(3)- 1]
}

function playRound(playerSelection, computerSelection) {

    playerSelection  = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return 'tie';
    }

    // win cases
    let rockBeatScissor = (playerSelection == 'rock' && computerSelection == 'scissor' ) ? true : false;
    let scissorBeatPaper = (playerSelection == 'scissor' && computerSelection == 'paper' ) ? true : false;
    let paperBeatRock = (playerSelection == 'paper' && computerSelection == 'rock' ) ? true : false;

    if (rockBeatScissor || scissorBeatPaper|| paperBeatRock) {
        return 'player';
    } else {
        return 'computer';
    }
}

const pHand = document.querySelector('.player-hand p');
const cHand = document.querySelector('.computer-hand p')

function displayHands(pChoice, cChoice) {
    pHand.textContent = `You played ${pChoice}`
    cHand.textContent = `Computer played ${cChoice}`
}

let playerScore = 0;
let computerScore = 0;


function updateScore(winner) {

    winner = winner.toLowerCase();

    if (winner == 'player') {
        playerScore += 1;
        return 'You Won this round!';
    } else if (winner == 'computer') {
        computerScore += 1;
        return 'Computer won this round!';
    } else if (winner == 'tie') {
        return 'Tie'
    }
}

const roundResult = document.querySelector('.round-result');
const liveScore = document.querySelector('.live-score')

function displayScore(msg) {
    roundResult.textContent = msg
    liveScore.textContent = `${playerScore} : ${computerScore}`
}

const finalResult = document.querySelector('.final-result p');

function displayWinner(pScore, cScore) {
    let finalWinner = '';

    if (pScore == 5 || cScore == 5) {
        finalWinner = (pScore == 5) ? 'Player' : 'Computer';
        finalResult.textContent = `The ${finalWinner.toUpperCase()} has won this game! `;
        playerScore = 0;
        computerScore = 0;
    } else {
        finalResult.textContent = '';
    }
    
}

function playGame(e) {
    let playerChoice = e.target.getAttribute('data-value');
    let computerChoice = computerPlay();

    let winner = playRound(playerChoice, computerChoice);

    displayHands(playerChoice, computerChoice);
    let roundMsg = updateScore(winner);
    displayScore(roundMsg);
    displayWinner(playerScore, computerScore)

    // TODO:
    // -updateDisplay() for updating score and updateHand() as well maybe
    // -win logic for n rounds
    // -reset button to start a fresh game
    // work on logic/dynamic stuff first before styling/css or aligning stuff

}


const rpsButtons = document.querySelectorAll('.rps');

rpsButtons.forEach((button) => {

    button.addEventListener('click', playGame)
});