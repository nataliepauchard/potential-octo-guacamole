$(document).ready(function () {

// create let variables cause they need to change throughout the game
let player1;
let player2;
let player1Turn = true;
let turnCounter = 0;

//Event handler - One function that set's player turn

$('.square').click(function() {

  if (player1Turn && $(this).attr('class') === 'square') {
    player1Turn = false;
    $(this).addClass(player1).html();
    turnCounter += 1;
    winCheck(player1, turnCounter);
  }
  else if (!player1Turn && $(this).attr('class') === 'square') {
    player1Turn = true;
    $(this).addClass(player2).html();
    turnCounter += 1;
    winCheck(player2, turnCounter);
  }
});
const playerChoice = function () {
  player1 = prompt("Are you a 'Felix' or a 'Salem'? (Type cat name below)"); //was asking whether player was "X" or "O"
  if (player1 === "Felix") { //was "X"
    player2 = "Salem" // was "O"
  } else {
   player2 = "Felix" //was "X"
  }
}


//Below calls above function, opens prompt and sets up player turns
$('#play').click(playerChoice);

$('#play').click(function() {
  $(this).addClass('clickPlay').html('GOOD LUCK!');
});



// //Display 'win' 'lose' or 'draw'
// // const possibleWins = [
// //     [0, 1, 2],
// //     [3, 4, 5],
// //     [6, 7, 8],
// //     [0, 3, 6],
// //     [1, 4, 7],
// //     [2, 5, 8],
// //     [0, 4, 8],
// //     [2, 4, 6]
// // ];

//Below function is called within the conditional functions above. (Not DRY - but it works)

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


}); //document.ready don't delete!!!
