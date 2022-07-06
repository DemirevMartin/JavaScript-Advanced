function calculator() {
    let selector1, selector2, result;

    return {
        init: (s1, s2, r) => {
            selector1 = document.querySelector(s1);
            selector2 = document.querySelector(s2);
            result = document.querySelector(r);
        },
        add: () => {
            result.value = Number(selector1.value) + Number(selector2.value);
        },
        subtract: () => {
            result.value = Number(selector1.value) - Number(selector2.value);
        }
    };
}