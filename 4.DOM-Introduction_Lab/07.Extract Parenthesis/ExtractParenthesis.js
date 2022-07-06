function extract(content) {
    const pattern = /\(([^\(]+)\)/g;
    let arr = [];
    let text = document.getElementById(content).textContent;

    while(current = pattern.exec(text)) {
        arr.push(current[1]);
        
    }

    return arr.join('; ');
}