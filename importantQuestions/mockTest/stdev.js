function round(number) {
  return Math.round(number * 100) / 100;
}



function stdev(arr) {
  // sum will produce the sum of all the items in the array
  var sum = arr.reduce(function(a, b) {
    return a + b;
  });

  // avg will take the sum and divide it by the length of the array, thus giving me the average
  avg = (sum / arr.length);

  // deviations (using the map fucnction), will allow you to iterate over the items in the array, and return a new array of values that are calculated from the original values.
  //differences and square are two variables defined within my deviations map function.  Since the important number I need is square, that is what i will return into deviations.
  var deviations = arr.map(function(num) {
    var differences = num - avg;
    var square = differences * differences;
    return square;
  });

  // From here, we need to sum and average out the new array that we got from the deviations function
  // sumTwo is the new sum.
  var sumTwo = deviations.reduce(function(a, b){
    return a + b;
  });

  // avgTwo is the new avgerage.
  var avgTwo = (sumTwo / arr.length);

  // From here, we apply the square root function (Math.sqrt()) in order to get the square root of our second average
  var output = Math.sqrt(avgTwo);

  // We will then round our output number using the defined round function at the top, and return the answer.
  return round(output);
}

stdev([6,2,3,4,9,6,1,0,5])
