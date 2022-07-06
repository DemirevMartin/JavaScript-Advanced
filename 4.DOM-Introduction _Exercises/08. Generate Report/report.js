function generateReport() {
    let output = document.getElementById('output');
    const inputs = document.querySelectorAll('th input'); 
    const trs = document.querySelectorAll('tbody tr');
    let result = [];

    for(let i = 0; i < trs.length; i++) {
        let data = {};
        for(let j = 0; j < inputs.length; j++) {
            if(inputs[j].checked) {
                const current = trs[i].children;
                data[inputs[j].name] = current[j].textContent;
            }
        }
        result.push(data);
    }
    output.textContent = JSON.stringify(result);
}