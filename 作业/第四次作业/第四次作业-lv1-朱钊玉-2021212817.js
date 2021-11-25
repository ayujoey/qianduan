const jc1 = function (n) {
    for (i = n - 1; i >= 1; i--) {
        n = i * n;
    }
    console.log(n);
}

jc1(10);

const jc2 = function (n) {

    if (n === 1) {
        return n;
    }
    else {
        return (n * jc2(n - 1));
    }
}

console.log(jc2(6));