function solve() {
	const input = document.getElementById('input').value;
	let output = document.getElementById('output');

	let sentences = input.split('.').filter(a => a.length > 0);

	while(sentences.length > 0) {
		const current = sentences.splice(0, 3).join('. ') + '.';
		let p = document.createElement('p');
		p.textContent = current;
		output.appendChild(p);
	}
}