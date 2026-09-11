function operate(a, b, callback) {
  return callback(a, b);
}

function multiply(a, b) {
  return a * b;
}
function devide(a, b) {
  return a / b;
}

console.log(operate(5, 10, multiply));
console.log(operate(5, 10, devide));
