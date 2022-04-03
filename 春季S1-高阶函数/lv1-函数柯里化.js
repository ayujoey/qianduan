function currying(func) {

    return function curried(...args) {
        if (args.length >= func.length) {
            return func;
        }
        else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}


function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = currying(sum);


console.log(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
console.log(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
console.log(curriedSum(1)(2)(3)); // 6，全柯里化

  //写一个curry函数来实现此功能