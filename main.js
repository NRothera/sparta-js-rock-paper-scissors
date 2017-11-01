var player1Choice, play1,play0, randomPlay2;

// These are the variables used throughout the game
var rockPaperScissors = ['rock','paper','scissors']
var player1 = prompt('Please enter your name');
var computer = 'Computer'
var player1Score = 0;
var computerScore = 0;

init()

//This is where the game takes place
function init(){
  while (player1Score < 3 && computerScore < 3) {
    gameStart();
    if (play1 == play2){
      alert("It's a draw! Try again")
    }else if (play1 === 'scissors' && play2==='paper'){
      player1Wins();
    }else if (play1 === 'paper' && play2==="rock"){
      player1Wins();
    }else if (play2 === 'scissors' && play1 === 'rock'){
      player1Wins();
    }else if (play2 === 'paper' && play1==='rock'){
      computerWins();
    }else if (play1 === 'scissors' && play2 === 'rock'){
      computerWins();
    }else if (play2 === 'scissors' && play1==='paper'){
      computerWins();
    }
    winCheck();
  }
}

// This function stores the player choice and randomly selects the computer choice
function gameStart(){
  player1Choice = prompt('Please choose rock, paper or scissors');
  randomPlay2 = Math.floor(Math.random()*3);
  play1 = player1Choice;
  play2 = rockPaperScissors[randomPlay2];
}

//This function performs when the human player wins
function player1Wins(){
  alert(player1 + ' uses ' + play1 + ", " + computer + ' uses ' + play2);
  alert(player1 + ' wins!');
  player1Score +=1;
  alert("The scores are: player1 - " + player1Score +', Computer- '+ computerScore );
}

//This function performs when the computer wins
function computerWins(){
  alert(player1 + ' uses ' + play1 + ", " + computer + ' uses ' + play2);
  alert(computer + ' wins!');
  computerScore +=1;
  alert("The scores are: player1 - " + player1Score +', Computer - '+ computerScore );
}

//At the end of each round this function checks to see if anyone has won yet.
function winCheck(){
  if (player1Score === 3){
    alert(player1 + ' wins the game!');
    var playAgain = prompt('Want to play again? y or n');
    if (playAgain === 'y'){
      player1Score = 0;
      computerScore = 0;
    }
  }else if (computerScore === 3){
    alert(computer + ' wins the game!');
    var playAgain = prompt('Want to play again? y or n');
    if (playAgain === 'y'){
      player1Score = 0;
      computerScore = 0;
    }
  }
}
