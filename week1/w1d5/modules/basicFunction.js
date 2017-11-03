  var add = function(n) {
  return n + n;
};

var square = function(n) {
  return n *n;
};

var circleArea = function(radius) {
return Math.PI * square(radius);
};



module.exports = {
  add: add,
  circleArea: circleArea
};


