let obj1 = {
    name: 'ayu',
    age: 3
}
obj1.gender = 'male';
//法一
const a2 = 'name'
const b2 = 'age'
const c2 = 'gender'
let obj2 = new Object();
obj2[a2] = 'yucca';
obj2[b2] = 120;
obj2[c2] = 'female';


//法二

function Persone() {
    this.name = 'you';
    this.age = 'unknow';
    this.gender = 'unknow';
}
let obj3 = new Persone();
//法三

// 这里是lv0，三种方法创建对象
// 下面是lv1，三种方法拷贝函数
// 手写一个复制函数
function copy(insertObj) {
    let newObj = {};
    //for-in循环遍历的是传入对象的属性，使用中括号语法可以访问属性，并将属性存到空对象的属性上
    for (let i in insertObj) {
        newObj[i] = insertObj[i];
    }
    return newObj;
}

// 使用复制函数复制对象
let objc1 = copy(obj1);
//复制函数法一


let objc2 = { ...obj2 };

//直接复制法二

let objc3 = {};
function copy(a, b) {
    var b = b || {}; //最初的时候给它一个初始值=它自己或者是一个json
    for (var name in a) {
        if (typeof a[name] === "object") { //先判断一下obj[name]是不是一个对象
            b[name] = (a[name].constructor === Array) ? [] : {}; //我们让要复制的对象的name项=数组或者是json
            copy(a[name], b[name]); //然后来无限调用函数自己 递归思想
        } else {
            b[name] = a[name];  //如果不是对象，直接等于即可，不会发生引用。
        }
    }
    return b; //然后在把复制好的对象给return出去
}
objc3 = copy(obj3, objc3)

//深拷贝函数法3


//创建一个空数组用来接收对象
let arr = [];

//将对象压入数组
arr.push(objc1, objc2, objc3);

//控制台输出
console.table(arr);