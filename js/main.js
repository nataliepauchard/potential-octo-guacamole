$(document).ready(function () {

// create let variables so they can change throughout the game
let player1;
let player2;
let player1Turn = true;
let turnCounter = 0;

//One function that set's player turn and later determines win, lose, draw display using winCheck function
$('.square').click(function () {
  if (player1Turn && $(this).attr('class') === 'square') {
    player1Turn = false;
    $(this).addClass(player1);
    turnCounter += 1;
    winCheck(player1, turnCounter);
  }
    else if (!player1Turn && $(this).attr('class') === 'square') {
    player1Turn = true;
    $(this).addClass(player2);
    turnCounter += 1;
    winCheck(player2, turnCounter);
  }
});

//Replacing "X" and "O" choices with "Felix" and "Salem" cat name choices. User decides whether they are "Felix" or "Salem" via alert prompt.
const playerChoice = function () {
  player1 = prompt("Are you a 'Felix' or a 'Salem'? (Type cat name below)");
  if (player1 === "Felix") {
    player2 = "Salem"
  } else {
   player2 = "Felix"
  }
}

$('#play').click(playerChoice);

//Changes play button to 'GOOD LUCK' while users play
$('#play').click(function () {
  $(this).addClass('clickPlay').html('GOOD LUCK!');
});

//Display 'win' 'lose' or 'draw'
// possibleWins = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

//Below winCheck function uses conditional statements to determine outcome of the game

const winCheck = function(player, turnCounter){
  const sqr0 = $('#sqr0').attr('class');
  const sqr1 = $('#sqr1').attr('class');
  const sqr2 = $('#sqr2').attr('class');
  const sqr3 = $('#sqr3').attr('class');
  const sqr4 = $('#sqr4').attr('class');
  const sqr5 = $('#sqr5').attr('class');
  const sqr6 = $('#sqr6').attr('class');
  const sqr7 = $('#sqr7').attr('class');
  const sqr8 = $('#sqr8').attr('class');

if (sqr0 === sqr1 && sqr1 === sqr2  && sqr0 !== 'square') {
  const outcome = (`Nice one ${player}, YOU WON!`);
  $('#screen').html(outcome);
}
  else if (sqr3 === sqr4 && sqr4 === sqr5  && sqr3 !== 'square') {
  const outcome = (`Nice one ${player}, YOU WON!`);
  $('#screen').html(outcome);
}
  else if (sqr6 === sqr7 && sqr7 === sqr8  && sqr6 !== 'square') {
  const outcome = (`Nice one ${player}, YOU WON!`);
  $('#screen').html(outcome)
}
  else if (sqr0 === sqr3 && sqr3 === sqr6  && sqr0 !== 'square') {
  const outcome = (`Nice one ${player}, YOU WON!`);
  $('#screen').html(outcome);
}
  else if (sqr1 === sqr4 && sqr4 === sqr7  && sqr1 !== 'square') {
  const outcome = (`Nice one ${player}, YOU WON!`);
  $('#screen').html(outcome);
}
  else if (sqr2 === sqr5 && sqr5 === sqr8  && sqr2 !== 'square') {
  const outcome = (`Nice one ${player}, YOU WON!`);
  $('#screen').html(outcome);
}
  else if (sqr0 === sqr4 && sqr4 === sqr8  && sqr0 !== 'square') {
  const outcome = (`Nice one ${player}, YOU WON!`);
  $('#screen').html(outcome);
}
  else if (sqr2 === sqr4 && sqr4 === sqr6  && sqr2 !== 'square') {
  const outcome = (`Nice one ${player}, YOU WON!`);
  $('#screen').html(outcome);
}
  else if (turnCounter == 9) {
  const outcome = ("IT'S A CAT'S GAME! Refresh the page & play again.");
  $('#screen').html(outcome);
}
}
});
