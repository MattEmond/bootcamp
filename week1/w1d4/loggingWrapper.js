var wrapLog = function (callback, name) {
  return function() {
    var slicedArgs = Array.prototype.slice.call(arguments, 0);
    console.log(name + "(" + slicedArgs.toString() + ")", "=>", callback.apply(null, arguments));

    // console.log(callback)
    // console.log(name)
    // console.log(arguments)
    // console.log(name, arguments, "=>")
  };

};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24

/*

Arguments is an array like object corresponding to the arguments passed
in the function.  In this code, it is allowing me to apply all arguments (x,y and then x,y,z)
into my console log.

The apply is letting me apply both functions for my callbacks (area and volume)

*/