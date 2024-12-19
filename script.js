// Function to add numbers
function AddNum() {
    let num1 = document.getElementById('firstbox').value;
    let num2 = document.getElementById('secondbox').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = num1 + num2;
    document.getElementById("result").value = result;
}

// Function to subtract numbers
function SubNum() {
    let num1 = document.getElementById('firstbox').value;
    let num2 = document.getElementById('secondbox').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = num1 - num2;
    document.getElementById("result").value = result;
}

// Function to multiply numbers
function MulNum() {
    let num1 = document.getElementById('firstbox').value;
    let num2 = document.getElementById('secondbox').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = num1 * num2;
    document.getElementById("result").value = result;
}

// Function to divide numbers
function DivNum() {
    let num1 = document.getElementById('firstbox').value;
    let num2 = document.getElementById('secondbox').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    if (num2 !== 0) {
        let result = num1 / num2;
        document.getElementById("result").value = result;
    } else {
        document.getElementById("result").value = "Cannot divide by 0";
    }
}

// Function to calculate power (exponentiation)
function PowNum() {
    let num1 = document.getElementById('firstbox').value;
    let num2 = document.getElementById('secondbox').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = num1 ** num2;
    document.getElementById("result").value = result;
}
