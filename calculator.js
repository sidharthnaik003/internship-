function calc() {
  let number1 = document.getElementById("n1").value;
  let number2 = document.getElementById("n2").value;
  let oper = document.getElementById("opr").value;
  let result;
  if (oper == "+") {
    let result = parseFloat(number1) + parseFloat(number2);
    alert(result);
  }
  if (oper == "-") {
    let result = parseFloat(number1) - parseFloat(number2);
    document.getElementById("res").innerHTML = "Your answer is" + " " + result;
  }
  if (oper == "*") {
    let result = parseFloat(number1) * parseFloat(number2);
    document.getElementById("res").innerHTML = "Your answer is" + " " + result;
  }
  if (oper == "/") {
    let result = parseFloat(number1) / parseFloat(number2);
    document.getElementById("res").innerHTML = "Your answer is" + " " + result;
  }
}
