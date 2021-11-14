let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
let newarr = [];
function lz(arr) {
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            lz(item);
        } else {
            newarr.push(item);
        }
    })
}

lz(arr);

console.log(newarr);