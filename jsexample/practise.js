//currying
// Method 1
function sum1(a) {
  return function (b) {
    return b ? sum(a + b) : a;
  };
}

function sum(a) {
  const op = function (b) {
    return a + b;
  };
  op.valueOf = function () {
    return a;
  };
  return op;
}
const a3 = sum(3);
const a36 = a3(6);
// const a365 = a36(5);
// a365(); //3+6+5=> 14
