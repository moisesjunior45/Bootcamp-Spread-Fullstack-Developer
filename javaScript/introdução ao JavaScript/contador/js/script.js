let contador = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	contador++;
	currentNumber.innerHTML = contador;
	// document.getElementById('currentNumber').innerText = contador;
}

function decrement() {
	contador--;
	currentNumber.innerHTML = contador;
	// document.getElementById('currentNumber').innerText = contador;
}   