var countdownGenerator = function (x) { //On this line, x is referring to the number 3 in the countdown variable.
  return function() {
    if (x > 0) {
      console.log("T-minus", x + "...");
    } else if (x === 0) {
      console.log("Blast Off!!");
    } else {
      console.log("Rockets already gone, bub!");
    }
    x --; //This allows us to countdown, as every time this is invoked x (3) subtracts 1.
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!