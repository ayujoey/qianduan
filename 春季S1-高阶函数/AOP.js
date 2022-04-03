// AOP的功能，将函数中非绑定的功能抽离出来，将一个函数动态放入另一个函数中
//这里最大的难点在于this的指向问题

let func = function () {
    console.log(2);
}


//在函数执行前执行的一个方法
Function.prototype.before = function (beforeFn) {
    let _self = this;//保存一下我们原来的函数
    return function () {//返回了一个函数
        beforeFn.apply(this, arguments);//执行先行函数
        let ret = _self.apply(this, arguments);//再把原函数拐回来
        return ret;//返回原函数
    };
}

//在函数执行后执行的一个方法
Function.prototype.after = function (afterFn) {
    let _self = this;//保存一下我们原来的函数
    return function () {//返回了一个函数
        _self.apply(this, arguments);//执行先行函数,先执行原函数
        afterFn.apply(this, arguments);//再执行后置函数
        // return ret;//返回原函数
    };
}




func = func.before((a = 1) => { console.log(a) }).after((b = 3) => { console.log(b); })

func()