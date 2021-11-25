
// 直接复制对象的话
// let a = {num:'123'};
// let b = a; // 复制引用

// alert( a == b ); // true，都引用同一对象
// alert( a === b ); // true
//如上，a和b实际上相当于指向了同一个地址
//所以如果修改b（b.name='321';）==>a.name的值也会变成'321'

//浅拷贝
//这样不会像上面那样共用一个地址
//咱们先找一个比较复杂一点的对象
const person = {
    name: 'myy',
    address: {
        city: 'ChongQing',
        college: 'CQUPT'
    },
    title: ['student', 'Chinese', 'five']
}

const clone1 = {};//整一个克隆对象进行拷贝

//原理是依次遍历原对象的每个属性，放入新对象中，这样不会像上面那样共用一个地址

for (let i in person) {
    clone1[i] = person[i];
}

console.log(person.name)
console.log(clone1.name);
console.log(clone1.address);
console.log(clone1.title);
console.log(clone1.address.city);
console.log(clone1.title[2]);
console.log(clone1.name === person.name);

//好了，现在你已经学会用for循环进行深浅拷贝对吧，但是它不够coooooooooooool
//Object.assign让你体验更加优雅的拷贝方式


let clone2 = Object.assign({}, person);//一行。结束战斗
//解释在这里www
//Object.assign(这里是你要拷贝出来的目标对象,后面是你要抄的原始对象)//一键拷贝
//ps：这个函数后面的原始对象可以不止一个，用来合并多个对象也是没有任何问题的

//例子
// let user = { name: "John" };
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// // 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
// Object.assign(user, permissions1, permissions2);
// 现在 user = { name: "John", canView: true, canEdit: true }

//如果出现冲突的话，就会覆盖掉原函数的值
//例
// let user = { name: "John", age: 21 };
// let permissions1 = { age: 31 };
// let permissions2 = { age: 41 };
// Object.assign(user, permissions1, permissions2);
// console.log(user.age);//41

console.log();
console.log(clone2.name);
console.log(clone2.address);
console.log(clone2.title);
console.log(clone2.address.city);
console.log(clone2.title[2]);
console.log(clone2.name === person.name);
