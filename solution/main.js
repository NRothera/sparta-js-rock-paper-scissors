// Get input


function getUserInput(){
  return prompt('Please choose either rock, paper or scissors')
}

//get the player move

function getPlayerMove(){
  return getUserInput();
}

// Random play
function randomPlay(){
  var randomNumber = Math.floor(Math.random()*3);
  if (randomNumber===0){
    return 'rock';
  }else if(randomNumber ===1){
    return 'paper';
  }else{
    return 'scissors'
  }
}
console.log(randomPlay())

//get the computer move

//play best of five

//check for a winner
