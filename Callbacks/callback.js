function x(y) {
  console.log("I am x");
  y();
}
setTimeout(() => console.log("Pizza Cooked!!"), 2000);
x(function y() {
  console.log("I am y");
});
