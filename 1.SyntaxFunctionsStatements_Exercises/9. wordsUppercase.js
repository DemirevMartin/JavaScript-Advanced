function uppercase(a) {
    const pattern = /\w+/g;

    let matchArr = a.match(pattern);
    let output = matchArr.map(word => word.toUpperCase()).join(', ');
    console.log(output);
}
uppercase('Hi, how are you?');
uppercase('hello?');