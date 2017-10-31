var rockPaperScissors = ['rock','paper','scissors']
var winner = true;
var player1 = 'Nick';
var player2 = 'Computer'

var randomPlay2 = Math.floor(Math.random()*3)



for (var i = 0; i < 10; i++) {
  var player1Choice = prompt('Please choose 0 for ' + rockPaperScissors[0] + ', 1 for '+ rockPaperScissors[1] + ' or 2 for '+ rockPaperScissors[2])
  randomPlay2 = Math.floor(Math.random()*3)
  var play1 = rockPaperScissors[player1Choice]
  var play2 = rockPaperScissors[randomPlay2]
  if (play1 == play2){
    console.log("It's a draw! Try again")
    continue
  }else if (play1 === 'scissors' && play2==='paper'){
    player1Wins()
    break
  }else if (play2 === 'scissors' && play1==='paper'){
    player2Wins()
    break
  }else if (play1 === 'paper' && play2==="rock"){
    player1Wins()
    break
  }else if (play2 === 'paper' && play1==='rock'){
    player2Wins()
    break
  }else if (play1 === 'scissors' && play2 === 'rock'){
    player2Wins()
  }else if (play2 === 'scissors' && play1 === 'rock'){
    player1Wins()
  }
}

function player1Wins(){
  alert(player1 + ' uses ' + play1 + ", " + player2 + ' uses ' + play2)
  alert(player1 + ' wins!')
}

function player2Wins(){
  alert(player1 + ' uses ' + play1 + ", " + player2 + ' uses ' + play2)
  alert(player2 + ' wins!')
}
