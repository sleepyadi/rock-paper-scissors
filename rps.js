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


function playGame(e) {
    let playerChoice = e.target.getAttribute('data-value');
    let computerChoice = computerPlay();

    let winner = playRound(playerChoice, computerChoice);
    console.log(winner)

    // TODO:
    // -updateDisplay() for updating score
    // -win logic for n rounds
    // -reset button to start a fresh game

}

const rpsButtons = document.querySelectorAll('.rps');

rpsButtons.forEach((button) => {

    button.addEventListener('click', playGame)
});