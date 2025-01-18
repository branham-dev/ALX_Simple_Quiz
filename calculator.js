const registerInput = () => {
	firstNumber = parseFloat(document.getElementById("number1").value);
	secondNumber = parseFloat(document.getElementById("number2").value);
};

let result = document.getElementById("calculation-result");

const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");

const add = (number1, number2) => {
	result.textContent = number1 + number2;
};

const subtract = (number1, number2) => {
	result.textContent = number1 - number2;
};

const multiply = (number1, number2) => {
	result.textContent = number1 * number2;
};

const divide = (number1, number2) => {
	result.textContent = number1 / number2;
};

addition.addEventListener("click", () => {
	registerInput();
	add(firstNumber, secondNumber);
});

subtraction.addEventListener("click", () => {
	registerInput();
	subtract(firstNumber, secondNumber);
});

multiplication.addEventListener("click", () => {
	registerInput();
	multiply(firstNumber, secondNumber);
});

division.addEventListener("click", () => {
	registerInput();
	divide(firstNumber, secondNumber);
});
