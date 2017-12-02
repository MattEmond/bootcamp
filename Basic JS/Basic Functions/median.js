 /*

 MEDIAN - the middle number of a list (when sorted)
        - if the list length is even, then the median is the average of the two middle values
        - use the provided 'round' function before returning your value

*/



function round(number) {
  return Math.round(number * 100) / 100;
}

function median(arr) {
  // First thing we do is sort the entire array.
  arr.sort(function(a, b) {
    return a - b;
  });

  // We the define a variable that can give us the middle number in the array
  var middle = Math.floor(arr.length / round(2));

  // We now define our if statment as such :
  // if the length of the array is not even (as defined by length % 2 !== 0), we return the middle number of the array.  This works, because in an off number array, the middle number will be obvious to find.
  if (arr.length % 2 !== 0) {
    return arr[middle];

  // In this case, if the array is even, we need to take the middle number, less 1, as well as the middle number, and get the average of the two.  We get the average using the pre-defined round function.
  } else {
    return (arr[middle - 1] + arr[middle]) / round(2);
  }

}

median([6,2,3,4,9,6,1,0,5])