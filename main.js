var player1Choice, play1,play0, randomPlay2

var rockPaperScissors = ['rock','paper','scissors']
var winner = true;
var player1 = 'Nick';
var computer = 'Computer'
var player1Score = 0;
var computerScore = 0;

while (player1Score < 3 && computerScore < 3) {
  init()
  if (play1 == play2){
    console.log("It's a draw! Try again")
  }else if (play1 === 'scissors' && play2==='paper'){
    player1Wins()
  }else if (play2 === 'scissors' && play1==='paper'){
    computerWins()
  }else if (play1 === 'paper' && play2==="rock"){
    player1Wins()
  }else if (play2 === 'paper' && play1==='rock'){
    computerWins()
  }else if (play1 === 'scissors' && play2 === 'rock'){
    computerWins()
  }else if (play2 === 'scissors' && play1 === 'rock'){
    player1Wins()
  }
}

function player1Wins(){
  alert(player1 + ' uses ' + play1 + ", " + computer + ' uses ' + play2)
  alert(player1 + ' wins!')
  player1Score +=1
  alert("The scores are: player1 - " + player1Score +', Computer- '+ computerScore )
}

function computerWins(){
  alert(player1 + ' uses ' + play1 + ", " + computer + ' uses ' + play2)
  alert(computer + ' wins!')
  computerScore +=1
  alert("The scores are: player1 - " + player1Score +', Computer - '+ computerScore )
}

function init(){
  player1Choice = prompt('Please choose 0 for ' + rockPaperScissors[0] + ', 1 for '+ rockPaperScissors[1] + ' or 2 for '+ rockPaperScissors[2])
  randomPlay2 = Math.floor(Math.random()*3)
  play1 = rockPaperScissors[player1Choice]
  play2 = rockPaperScissors[randomPlay2]
}
