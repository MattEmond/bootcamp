// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(arr, index) {
    if (arr === 'Waldo') {
      found(index)
    }
  })

  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found();   // execute callback
  //   }
  // }
};

function actionWhenFound(index) {
  console.log("Found him at: ", index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);