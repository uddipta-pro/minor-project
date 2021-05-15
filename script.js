let buttons = document.getElementsByClassName("btn");
let display = document.getElementById("display");
let display1 = document.getElementById("display1");
let v1 = 0;
let v2 = null;
let funct = null;
let result = null;
let clear = false;
function calc() {
  let value = $(this).val();
  if (
    value == "+" ||
    value == "-" ||
    value == "*" ||
    value == "/" ||
    value == "%"
  ) {
    if (value == "+") {
      funct = "+";
    } else if (value == "-") {
      funct = "-";
    } else if (value == "*") {
      funct = "*";
    } else if (value == "/") {
      funct = "/";
    } else if (value == "%") {
      funct = "%";
    }
    display1.innerText += funct;
    v1 = parseFloat(display.textContent);
    if (v2 == null && value == "*") {
      v2 = 1;
    }
    if (v2 == null && value == "/") {
      v2 = 1;
    }
    v2 = eval(v1 + " " + funct + " " + v2);
    display.innerText = "";
  } else if (value == "=") {
    if (funct == "%") {
      result = v1 / 100;
    } else {
      let v3 = parseFloat(display.textContent);
      result = eval(v2 + " " + funct + " " + v3);
    }
    display.innerText = result;
    v2 = null;
    clear = true;
    display1.innerText = display.innerText;
  } else if (value == "AC") {
    display.innerText = "";
    display1.innerText = "";
    v1 = 0;
    v2 = null;
    funct = null;
    result = null;
  } else if (value == "back") {
    let str = display.innerText;
    let newstr = str.slice(0, -1);
    display.innerText = newstr;
    let str1 = display1.innerText;
    let newstr1 = str1.slice(0, -1);
    display1.innerText = newstr1;
  } else {
    if (clear == true) {
      display.innerText = "";
      clear = false;
    }
    display.innerText += value;
    display1.innerText += value;
  }
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", calc);
}
