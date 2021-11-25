//深拷贝
//其实上一个lv2的作业有一个小坑，还有些问题，不知道你发现没有
const person = {
    name: 'myy',
    address: {    //这里，发现问题了吗
        city: 'ChongQing',
        college: 'CQUPT'
    },
}
const clone1 = {};
for (let i in person) {
    clone1[i] = person[i];
}
//我们发现当遍历到address的时候，我们用的还是复制对象对吧，那么，理所当然的，这俩玩意还是共用的一个地址咯
//什么？不相信，那么再来看看这个例子吧

//console.log(person.address.city === clone1.address.city);//ture 看到了吧，铁证如山
//clone1.address.city = 'Nanshan';//试试修改clone1的属性
//console.log(person.address.city);//南山  出现问题了哦，修改了原对象，这不完犊子了吗

//为了解决这个问题，于是深拷贝出现了！！！（欢呼~~~掌声）
//原理很简单：在依次复制的时候，判断一下是不是一个对象就行了，如果是的话，继续向下复制其结构
//ps:因为不能确定下面一共有多少层，所以毫无疑问，递归是最好想的方式
//还是用这个对象

let clone2 = {};
function deepclone(obj) {
    let clone = {};
    let ncclone = {};//这里放一个内层的对象来拷贝原函数内层的东西
    for (let i in obj)//先循环第一层
        if (typeof obj[i] === "object") {//发现了有object类型
            ncclone = deepclone(obj[i])//当person[i]是对象的时候，来个递归处理一下
            clone[i] = ncclone;//ncclone接下了person的全部，再打包发给clone
        }
        else {
            clone[i] = obj[i];//没事就直接转给clone
        }
    return clone;//返回clone，功成身退
};
console.log();

clone2 = deepclone(person);
console.log(clone2);
console.log(person.address.city === clone2.address.city);//ture 看到了吧，铁证如山
clone2.address.city = 'Nanshan';//试试修改clone1的属性
console.log(person.address.city);//南山  出现问题了哦，修改了原对象，这不完犊子了吗
console.log();

//你以为这样就结束了？也许是，但是还有一个问题，那就是......不够coooooooooooool
//之前明明就有简单的函数方法，为什么这里没有呢，对吧
//下面这种方法需要先安装lodash（一个js的辅助库）
import _ from 'Lodash'//引入一个新的依赖
//然后直接调用_.cloneDeep()复制，很简单吧，嘿嘿
let clone3 = _.cloneDeep(person);
console.log(clone3);