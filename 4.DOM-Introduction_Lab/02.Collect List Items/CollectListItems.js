function extractText() {
    let text = Array.from(document.querySelectorAll('li'));
    text = text.map(e => e.textContent).join('\n');
    
    document.getElementById('result').textContent = text;
}