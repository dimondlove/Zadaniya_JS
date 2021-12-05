Zadanie4();

// ФУНКЦИИ

function Zadanie1() {
	let num = prompt("Введите число", 0);

	let result = num * num;

	return alert(result);
}

function Zadanie2() {
	let num1 = Number(prompt("Введите первое число", 0));
	let num2 = Number(prompt("Введите второе число", 0));

	let result = (num1 + num2) / 2;

	return alert(result);
}

function Zadanie3() {
	let num = prompt("Введите длинну стороны квадрата", 0);

	let result = num * num;

	return alert("Площадь квадрата " + result);
}

function Zadanie4() {
	num1 = Number(prompt("Введите первое число"));
	num2 = Number(prompt("Введите второе число"));
	op = prompt("Введите символ операции ( + - * / )");

	switch (op) {
	    case "+":
	        alert(`${num1} + ${num2} = ${num1 + num2}`);
	        break;
	    case "-":
	        alert(`${num1} - ${num2} = ${num1 - num2}`);
	        break;
	    case "*":
	        alert(`${num1} * ${num2} = ${num1 * num2}`);
	        break;
	    case "/":
	        alert(`${num1} / ${num2} = ${num1 / num2}`);
	        break;
	    default:
	        alert("Вы ввели неверный символ");
	        break;
	}
}