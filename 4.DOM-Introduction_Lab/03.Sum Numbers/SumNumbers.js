function calc() {
    const a = Number(document.getElementById('num1').value);
    const b = Number(document.getElementById('num2').value);
    const c = (a + b).toString();
    document.getElementById('sum').value = c;
}
