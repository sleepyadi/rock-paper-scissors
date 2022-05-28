function random(num) {
    return Math.floor(Math.random() * num) + 1;
}

function computerPlay() {
    let choice = random(3);

    if (choice == 1) {
        return 'Rock';
    } else if (choice == 2) {
        return 'Paper';
    } else if (choice == 3) {
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection  = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        return 'Tie';
    }

    // win cases
    let rockBeatScissor = (playerSelection == 'rock' && computerSelection == 'scissor' ) ? true : false;
    let scissorBeatPaper = (playerSelection == 'scissor' && computerSelection == 'paper' ) ? true : false;
    let paperBeatRock = (playerSelection == 'paper' && computerSelection == 'rock' ) ? true : false;

    if (rockBeatScissor || scissorBeatPaper|| paperBeatRock) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function game(rounds=1) {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0

    for (let i = 0; i < rounds; i++) {
        let getPlayerSelection = prompt("Rock, paper or scissor?");
        let winner = playRound(getPlayerSelection, computerPlay());
        if (winner == 'Player') {
            playerScore += 1;
        } else if (winner == 'Computer') {
            computerScore += 1;
        } else {
            ties += 1
        }
    }

    if (playerScore > computerScore) {
        return `Player wins! Final score = Player: ${playerScore} Computer: ${computerScore} Ties: ${ties}`;
    } else if (computerScore > playerScore) {
        return `Computer wins! Final score = Player: ${playerScore} Computer: ${computerScore} Ties: ${ties}`;
    } else {
        return `Tie! Final score = Player: ${playerScore} Computer: ${computerScore} Ties: ${ties}`;
    }
}