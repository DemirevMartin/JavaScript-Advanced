function createProcessor(input) {
    let list = [];

    function add(string) {
        list.push(string);
    }

    function remove(string) {
        list = list.filter(s => s != string);
    }

    function print() {
        console.log(list.join(','));
    }

    for (let el of input) {
        [instruction, string] = el.split(' ');
        switch (instruction) {
            case 'add': add(string); break;
            case 'remove': remove(string); break;
            case 'print': print(); break;
        }
    }
}

createProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);