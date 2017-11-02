//Takes a number of dice to be rolled and returns number of rolled die.

function diceCount(numberOfDice) {
  let diceArray = []
  for (a = 0; a < numberOfDice; a++) {
    diceArray.push(rollDice())
  }
  return diceArray.join(', ')

}

// Generates a random number

function rollDice() {
  var randomNumber = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
  return randomNumber;
}



var numberArray = process.argv.slice(2)[0]
console.log("Rolled " + numberArray + " dice: " + diceCount(numberArray))