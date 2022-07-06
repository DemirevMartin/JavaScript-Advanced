function subtract() {
    const a = Number(document.getElementById('firstNumber').value);
    const b = Number(document.getElementById('secondNumber').value);
    const result = a - b;

    document.getElementById('result').textContent = result;
}