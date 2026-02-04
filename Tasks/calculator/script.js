let result = document.querySelector("#result");
let expression = " ";
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let mul = document.querySelector("#mul");
let equalsto = document.querySelector("#equalsto");
let resetbtn = document.querySelector("#resetbtn");
let backbtn = document.querySelector("#backbtn");
let sqarebtn = document.querySelector("#sqarebtn");
// console.log(seven);
seven.addEventListener("click", () => {
  appendValue(7);
});

eight.addEventListener("click", () => {
  appendValue(8);
});

mul.addEventListener("click", () => {
  appendValue("*");
});

equalsto.addEventListener("click", () => {
  let finalresult = eval(expression);
  result.value = finalresult;
});
resetbtn.addEventListener("click", () => {
  expression = "";
  result.value = expression;
});
backbtn.addEventListener("click", () => {
  let expressionarray = expression.split("");
  expressionarray.pop();
  expression = expressionarray.join("");
  result.value = expression;
});
sqarebtn.addEventListener("click", () => {
  //   let finalresult = eval(expression);
  //   let squareresult = finalresult * finalresult;
  //   result.value = squareresult;
  let expressionarray = expression.split("");
  let lastelement = expressionarray.pop();
  let squareresult = lastelement * lastelement;
  let newarray = expressionarray;
  //   console.log(newarray);
  let newexpression = newarray.join("");
  let finalexpression = newexpression + squareresult;
  result.value = finalexpression;
  expression = finalexpression;
});
function appendValue(num) {
  expression += num;
  result.value = expression;
}
