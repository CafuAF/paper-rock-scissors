

function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * 3)];
 }

 function capitalize() {
        playerPick = playerPick.toLowerCase();
        return playerPick = playerPick[0].toUpperCase() + playerPick.substring(1);
}

 let playerPick = prompt("Rock, Paper or Scissors?");
 const computerPick = getComputerChoice();

 console.log(computerPick);
 console.log(capitalize(playerPick));