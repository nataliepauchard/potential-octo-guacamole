
# Project 0: Tic-Tac-Toe

### The GAME

Tic-Tac-Toe is a game that's also called naughts and crosses. It's a simple 2 player game where each player selects a square within a 3x3 grid and the aim is it get three squares in a row. This was a simple project for training purposes and still a work in progress.

It was meant to help us learn how html, CSS, Javascript and jQuery all interact to create a game we can deploy online.

### Approach

At first the approach considered two functions (as per below), that referred to two Player buttons. However this caused unnecessary problems down the line when adding different class was required.

```
$('#PlayerX').click(function() {
  $('#screen').text("Once Player X has made their selection. Click Player O");
  box.click(function() {
  $(this).css('background', 'red').html('X');
  });
winCheck("X")
});

$('#PlayerO').click(function() {
  $('#screen').text("Once Player O has made their selection. Click Player X");
  $('.square').click(function() {
  $(this).css('background', 'blue').html('O');
  });
  winCheck("O")
});
```
Therefore, one function was eventually created to discern between first player and second player (later termed 'Felix' and 'Salem').

### Tic-Cat-Toe

The game's name was slightly altered to reflect the theme of the page and also a play on words, especially the term 'Cat's Game' which means when two players draw. Instead of naughts and crosses the game uses images and names of cats.

## Images Used

The images were pulled from placekitten.com:
![Felix the Cat] ("http://placekitten.com/250/250")
![Salem the Cat] ("http://placekitten.com/245/245")

## Link to The Game

![Tic-Cat-Toe] ("https://nataliepauchard.github.io/potential-octo-guacamole/")

### Bugs

- The project is still a work in progress, especially the selection of players at the start with many potential user errors.

- While the game mostly works as it should, occasionally some combinations don't display exactly what coincides with the game and a 'reset' button is required.

- It anticipates a draw before you get to the very end. Even though there's no way of either player winning it displays Cat's Draw msging prematurely.

### Next Steps

- A player selection method that is less error prone.

- Include some animations.

- De-bugging certain combinations.

- Show the cat names on each square as they're selected
